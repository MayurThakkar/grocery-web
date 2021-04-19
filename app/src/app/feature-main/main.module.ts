import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './feature/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class MainModule {}
