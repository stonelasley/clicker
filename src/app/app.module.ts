import { NgModule, ErrorHandler }                   from '@angular/core';
import { Http, HttpModule }                         from '@angular/http';
import { BrowserModule }                            from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar }                                from '@ionic-native/status-bar';
import { SplashScreen }                             from '@ionic-native/splash-screen';
import { TranslateLoader, TranslateModule }         from '@ngx-translate/core';
import { TranslateHttpLoader }                      from '@ngx-translate/http-loader';
import { ClickerModule }                            from '../clicker';
import { CommonModule }                             from '../common';
import { App }                                      from './app.component';

export function createTranslateLoader(http: Http): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    ClickerModule,
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(App),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http],
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})

export class AppModule {}
