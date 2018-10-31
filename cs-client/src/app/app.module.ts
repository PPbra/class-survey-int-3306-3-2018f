// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';

// Import components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SurveySheetComponent } from './components/survey-sheet/survey-sheet.component';

// Import services
import { CsApiService } from './services/cs-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveySheetComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CsApiService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    LoginFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const loginForm = createCustomElement(LoginFormComponent, {
      injector
    });
    customElements.define('login-form', loginForm);
  }
}
