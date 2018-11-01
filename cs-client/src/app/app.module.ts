// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Import services
import { CsApiService } from './services/cs-api.service';

// Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SurveySheetComponent } from './components/survey-sheet/survey-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveySheetComponent,
    LoginFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CsApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
