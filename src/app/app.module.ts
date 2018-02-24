import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { MomentsComponent } from './moments/moments.component';
import { IntroComponent } from './intro/intro.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationComponent } from './location/location.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CountDown } from "ng2-date-countdown";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailsComponent,
    MomentsComponent,
    IntroComponent,
    RsvpComponent,
    WelcomeComponent,
    ScheduleComponent,
    LocationComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MomentsComponent]
})
export class AppModule { }
