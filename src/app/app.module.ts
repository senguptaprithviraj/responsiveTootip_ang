import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { ErrorComponent } from './error/error.component';
import { BtnCustomTooltipComponent } from './btn-custom-tooltip/btn-custom-tooltip.component';

const appRoutes: Routes = [
  {path: '', component: ButtonContainerComponent},
  {path: 'not-found', component: ErrorComponent},
  {path:'**', redirectTo: "/not-found"},

];

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    ErrorComponent,
    BtnCustomTooltipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
