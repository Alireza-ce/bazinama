import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/interceptor/interceptor.service';
import { LoadingComponent } from './core/loading/loading/loading.component';
import { LoadingService } from './core/loading/loading.service';
import { ProductSharedService } from './shared/services/product-shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModule } from './modules/login/login.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './core/guard/auth.guard';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

Sentry.init({
  dsn: "https://3bf96cdc71894905b0ac267cc1ed6e18@o569032.ingest.sentry.io/5714478",
  release: 'bazinama@13',
  tracesSampleRate: 0.5,
});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LoginModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    ProductSharedService,
    LoadingService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
