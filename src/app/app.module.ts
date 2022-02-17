import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './components/counter/counter.module';
import { DbzModule } from './components/dbz/dbz.module';
import { HerosModule } from './components/heros/heros.module';


@NgModule({
  declarations: [
    AppComponent,

 ],
  imports: [
    BrowserModule,
    HerosModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
