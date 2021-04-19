import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './feature/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule],
})
export class MainModule {}
