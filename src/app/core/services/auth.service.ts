import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // Mock Credentials
    private readonly MOCK_EMAIL = 'admin@crm.com';
    private readonly MOCK_PASSWORD = '#admin123';
    private readonly TOKEN_KEY = 'CRM_AUTH_TOKEN';

    // Auth State
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
    isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    constructor(private _Router: Router) {}

    private hasToken(): boolean {
        console.log('Has token:', !!localStorage.getItem(this.TOKEN_KEY));
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    login(email: string, paswword: string): any {
        if (email !== this.MOCK_EMAIL) {
            return { success: false, error: 'Invaild email address' };
        }
        if (paswword !== this.MOCK_PASSWORD) {
            return { success: false, error: 'Incorrect password' };
        }
        const token = this.generatedMockToken();
        console.log(token);
        localStorage.setItem('token', token);
        this.isAuthenticatedSubject.next(true);
        return { success: true };
    }
    // JWT Simulation (Generate Token and use it as real API)
    generatedMockToken(): string {
        const header = btoa(JSON.stringify({ alg: 'HS256', type: 'JWT' }));
        const payload = btoa(JSON.stringify({ email: this.MOCK_EMAIL, role: 'admin', exp: Date.now() + 24 * 60 * 60 * 1000 }));
        const signature = btoa('mock_signature');
        return `${header},${payload},${signature}`;
    }
    logout() {
        localStorage.removeItem('token');
        this.isAuthenticatedSubject.next(false);
        this._Router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticatedSubject.value;
    }
}
