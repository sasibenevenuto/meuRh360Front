import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeCompanyComponent } from './welcome-company/welcome-company.component';

export const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'welcome-company', component: WelcomeCompanyComponent }
];
