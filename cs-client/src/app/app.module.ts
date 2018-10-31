// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Import components
import { AppComponent } from './app.component';
import { SurveySheetComponent } from './components/survey-sheet/survey-sheet.component';

// Import services
import { CsApiService } from './services/cs-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveySheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
