import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{ DragulaModule } from 'ng2-dragula';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GamePage } from '../pages/game/game.component';
import { CenarioPage } from '../pages/cenario/cenario.component';
import { CreditosComponent } from '../pages/creditos/creditos.component';

import { CenariosService } from '../pages/cenario/cenario-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GamePage,
    CenarioPage,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GamePage,
    CenarioPage
  ],
  providers: [
    CenariosService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
