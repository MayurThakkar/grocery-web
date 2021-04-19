import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { CoreModule } from './header/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
