import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleComponent } from './controle/controle.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { ControleService } from './services/controle.service';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
];

@NgModule({
  declarations: [ControleComponent, ListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [ControleComponent],
  providers: [ControleService],
})
export class ControleModule {}
