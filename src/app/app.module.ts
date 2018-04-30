import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather/weather.component';
import { QuoteComponent } from './quote/quote/quote.component';
import { PersonComponent } from './person/person/person.component';
import { StockSummaryComponent } from './stocks/stock-summary/stock-summary.component';
import { NewsComponent } from './news/news/news.component';
import { SportsNewsComponent } from './news/sports-news/sports-news.component';
import { MusicComponent } from './music/music/music.component';
import { ListComponent } from './todo/list/list.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuoteComponent,
    PersonComponent,
    StockSummaryComponent,
    NewsComponent,
    SportsNewsComponent,
    MusicComponent,
    ListComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
