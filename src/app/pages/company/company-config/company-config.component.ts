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
  selector: 'app-company-config',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,RouterLink,MatButtonModule,ToolbarComponent,FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,],
  templateUrl: './company-config.component.html',
  styleUrl: './company-config.component.css'
})
export class CompanyConfigComponent {

}
