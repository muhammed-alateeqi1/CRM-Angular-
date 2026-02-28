import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DealsComponent } from './pages/deals/deals.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [guestGuard],
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivateChild: [authGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'customers', component: CustomersComponent },
            { path: 'leads', component: LeadsComponent },
            { path: 'deals', component: DealsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    },
];
