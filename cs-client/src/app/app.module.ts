// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Import services
import { CsApiService } from './services/cs-api.service';

// Import components
import { AppComponent } from './app.component';
import { CsHomeComponent } from './components/cs-home/cs-home.component';
import { CsLoginFormComponent } from './components/cs-login-form/cs-login-form.component';
import { CsSurveySheetComponent } from './components/cs-survey-sheet/cs-survey-sheet.component';
import { CsLeftNavPanelComponent } from './components/cs-left-nav-panel/cs-left-nav-panel.component';
import { CsTopNavPanelComponent } from './components/cs-top-nav-panel/cs-top-nav-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CsSurveySheetComponent,
    CsLoginFormComponent,
    CsHomeComponent,
    CsLeftNavPanelComponent,
    CsTopNavPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    CsApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
