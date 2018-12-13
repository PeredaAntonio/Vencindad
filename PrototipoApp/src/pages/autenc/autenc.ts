import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ListPage } from "../list/list";

@IonicPage()
@Component({
  selector: 'page-autenc',
  templateUrl: 'autenc.html',
})
export class AutencPage {
  searchQuery: string = '';
  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutencPage');
  }

  validar(pass) 
  {

    if (pass == 123456)
    {
      this.navCtrl.push(ListPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Credenciales',
        message: 'Contraseña incorrecta',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            handler: () => {
              console.log('Clic cancelar');
            }
          }
        ]
      });
      alert.present()
    }
  }

}
