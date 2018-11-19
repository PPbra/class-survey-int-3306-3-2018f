import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsLoginFormComponent } from './components/cs-login-form/cs-login-form.component';
import { CsHomeComponent } from './components/cs-home/cs-home.component';
import { CsSurveySheetComponent } from './components/cs-survey-sheet/cs-survey-sheet.component';

const routes: Routes = [
  { path: '', component: CsHomeComponent },
  { path: 'login', component: CsLoginFormComponent },
  { path: 'home', component: CsHomeComponent },
  { path: 'survey', component: CsSurveySheetComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
