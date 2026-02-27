import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    authError: string = '';
    isLoading: boolean = false;
    constructor(
        private _Router: Router,
        private _AuthService: AuthService
    ) {}
    ngOnInit(): void {
        this.clearAuthErrorOnInputChange();
        // test u should compelete the logout state tommorow + guards preparation 
        this._AuthService.isAuthenticated$.subscribe((isAuth) => {
            console.log('User is authenticated (test):', isAuth);
            this._AuthService.isAuthenticated$.subscribe(val => console.log('State changed:', val));
        });
    }
    loginForm = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    });

    onSubmit(): void {
        this.authError = '';
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        this.isLoading = true;
        setTimeout(() => {
            const email = this.loginForm.value.email?.trim() || '';
            const password = this.loginForm.value.password || '';

            const result = this._AuthService.login(email, password);
            if (result.success) {
                console.log('Login Successful <3');
                this._Router.navigate(['/dashboard']);
            } else {
                this.authError = result.error;
            }
            this.isLoading = false;
        }, 1000);
    }
    clearAuthErrorOnInputChange() {
        this.loginForm.valueChanges.subscribe(() => {
            this.authError = '';
        });
    }
}
