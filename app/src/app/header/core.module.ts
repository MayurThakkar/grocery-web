import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { environment } from '@src/environments/environment';
import { reducers } from '../app.reducer';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './feature/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireDatabaseModule,
      AuthModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      SharedModule,
      FlexLayoutModule,
      HttpClientModule,
      StoreModule.forRoot(reducers),

    ],
    exports: [HeaderComponent]
  })
  export class CoreModule {}
