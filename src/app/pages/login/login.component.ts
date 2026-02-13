import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    private readonly MOCK_EMAIL: string = 'admin@crm.com';
    private readonly MOCK_PASSOWED: string = '#admin123';
    authError: string = '';
    isLoading: boolean = false;
    constructor(private _Router: Router) {}
    ngOnInit(): void {
        this.clearAuthErrorOnInputChange();
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
            const email = this.loginForm.value.email?.trim();
            const password = this.loginForm.value.password;

            if (email !== this.MOCK_EMAIL) {
                this.authError = 'Incorrect email address';
                this.isLoading = false;
                return;
            }
            if (password !== this.MOCK_PASSOWED) {
                this.authError = 'Incorrect password , Please try again.';
                this.isLoading = false;
                return;
            }
            console.log('Login Successful <3');
            this.isLoading = false;
            this._Router.navigate(['/dashboard']);
        }, 1000);
    }
    clearAuthErrorOnInputChange() {
        this.loginForm.valueChanges.subscribe(() => {
            this.authError = '';
        });
    }
}
