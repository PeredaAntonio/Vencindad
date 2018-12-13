import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { SociosService} from '../../services/socios.service';
import { DetailPage } from '../detail/detail';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  searchQuery: string = '';
  socios = [];
  @ViewChild('myNav') nav: NavController
  Foto:any;
  ID:any;
  soci:any;

  constructor(public navCtrl: NavController, public sociosService : SociosService, public navParams: NavParams) {
    this.socios = sociosService.getSocios();
    this.Foto = this.navParams.get('Foto');
    this.ID = this.navParams.get('id');
    var index = this.socios.indexOf(this.ID);

    for (let index = 0; index < this.socios.length; index++) {
      if (this.ID == index) {
        
      }
      
    }
  }

  getFiltradoSocios(ev: any ) {
    // Reset items back to all of the items
    this.socios = this.sociosService.getSocios();
    console.log(this.socios);
    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.socios = this.socios.filter((socio) => {
        var NombreCompleto = socio.Nombres +" "+ socio.ApellidoPaterno +" "+ socio.ApellidoMaterno;
        return (
          NombreCompleto.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public goToDetail(id, ImgUrl){
    this.navCtrl.push(DetailPage, {id:id, url:ImgUrl}) ;
  }

  public createSocio(){
    this.navCtrl.push(NewPage);
  }
    
}
