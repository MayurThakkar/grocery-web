import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogComponent } from '../feature-dialog/component/dialog.component';
import { HeaderComponent } from '../core/feature/header/header.component';
import { MainComponent } from '../feature-main/feature/main.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    TranslateModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    TranslateModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class SharedModule {}
