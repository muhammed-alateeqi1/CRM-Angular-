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
    emailScheme: string = 'admin@crm.com';
    passwordScheme: string = '#admin123';
    authError: string = '';
    isLoading: boolean = false;
    constructor(private _Router: Router) {}
    ngOnInit() {
        this.clearAuthErrorOnInputChange();
    }
    loginForm = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    });

    formValidation() {
        this.authError = '';
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        //auth logic
        this.isLoading = true;
        setTimeout(() => {
            const email = this.loginForm.value.email?.trim();
            const password = this.loginForm.value.password;
            // console.log(this.loginForm.value)
            if (email !== this.emailScheme) {
                this.authError = 'incorrect email';
                console.log('incorrect email');
                this.isLoading = false;
                return;
            }
            if (password !== this.passwordScheme) {
                this.authError = 'incorrect password try to enter vaild password';
                console.log('incorrect password');
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
