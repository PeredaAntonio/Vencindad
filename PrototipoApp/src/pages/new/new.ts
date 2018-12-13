import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SociosService } from '../../services/socios.service';
import { ListPage } from "../list/list";

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  socio =  {id:null, Rut:"", Nombres:"", ApellidoPaterno:"",  ApellidoMaterno:"", FechaNacimiento:"", Direccion:"", Telefono:"", Email:"", ImgUrl:""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public sociosService : SociosService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  addSocio(socio){
    this.socio.id = Date.now();
    this.socio.ImgUrl = "assets/imgs/user.png";
    this.sociosService.createSocio(this.socio);
    console.log("Creando nuevo " + socio);
    this.navCtrl.push(ListPage);
  }
}
