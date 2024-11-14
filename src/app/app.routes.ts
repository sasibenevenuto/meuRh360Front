import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeCompanyComponent } from './company/welcome-company/welcome-company.component';
import { CompanyRegistrationComponent } from './company/company-registration/company-registration.component';

export const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'welcome-company', component: WelcomeCompanyComponent },
    { path: 'company-registration', component: CompanyRegistrationComponent }
];
