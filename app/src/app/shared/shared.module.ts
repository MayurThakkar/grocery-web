import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MainComponent } from '../main/feature/main.component';
import { DialogComponent } from '../dialog/feature/dialog.component';
import { MeterService } from '../meter/meter.service';
import { AuthService } from '../auth/auth.service';
import { UIService } from './ui.service';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle() {
    return 'some value';
  }
}

@NgModule({
  declarations: [MainComponent, DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
      useDefaultLang: true,
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  providers: [MeterService, AuthService, UIService],
})
export class SharedModule {}
