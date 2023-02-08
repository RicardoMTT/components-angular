import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ListComponent } from './components/list/list.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { OnlyAlphabeticDirective } from './directives/only-alphabetic.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    DialogComponent,
    ListComponent,
    OverlayComponent,
    CardComponent,
    SearchComponent,
    OnlyAlphabeticDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaV3Module
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
