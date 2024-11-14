import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WelcomeCompanyComponent } from './pages/company/welcome-company/welcome-company.component';
import { CompanyRegistrationComponent } from './pages/company/company-registration/company-registration.component';
import { CompanyConfigComponent } from './pages/company/company-config/company-config.component';

export const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'welcome-company', component: WelcomeCompanyComponent },
    { path: 'company-registration', component: CompanyRegistrationComponent },
    { path: 'company-config', component: CompanyConfigComponent }
];
