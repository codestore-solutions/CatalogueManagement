import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AnonymousGuard } from './services/guards/anonymous.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './services/interceptors/http-interceptor';
import { SharedModule } from './shared_modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    [ AuthGuard, AnonymousGuard ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
