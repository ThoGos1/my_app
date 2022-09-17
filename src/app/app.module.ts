import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // This is like a python module that lets me make forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PydidComponent } from './components/pydid/pydid.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlainComponent } from './components/plain/plain.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PydidComponent,
    HeaderComponent,
    FooterComponent,
    PlainComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
