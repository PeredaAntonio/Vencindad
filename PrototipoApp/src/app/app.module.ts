import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DetailPage } from '../pages/detail/detail';
import { NewPage } from '../pages/new/new';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';
import { SociosService } from "../services/socios.service";
import { AutencPage } from '../pages/autenc/autenc';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    DetailPage,
    NewPage,
    ListPage,
    AutencPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [  
    MyApp,
    DetailPage,
    NewPage,
    ListPage,
    AutencPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SociosService
  ]
})
export class AppModule {}
