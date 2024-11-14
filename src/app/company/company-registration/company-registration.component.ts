import { Component,inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {ToolbarComponent} from '../../shared/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,RouterLink,MatButtonModule,ToolbarComponent,FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,],
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {
  readonly hideRequiredControl = new FormControl(false);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  readonly options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  protected readonly hideRequired = toSignal(this.hideRequiredControl.valueChanges); 
}
