import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { SociosService } from '../../services/socios.service';
import { ListPage } from '../../pages/list/list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  socio =  {id:null, Rut:"", Nombres:"", ApellidoPaterno:"",  ApellidoMaterno:"", FechaNacimiento:"", Direccion:"", Telefono:"", Email:"", ImgUrl:""};
  id = null;

  Foto:any;
  
  constructor(private alertCtrl: AlertController,private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams, public sociosService : SociosService, private camera : Camera) {
    this.id = navParams.get('id');
    this.Foto = navParams.get('ImgUrl');
    if (this.id == 0) {

    }else{
      this.socio = sociosService.getSocio(this.id);
      this.Foto = this.socio.ImgUrl;
    }

  }

  SelectFoto(){

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL, //FILE_URI
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false,
      allowEdit:true,
      targetWidth:100,
      targetHeight:100
      
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.Foto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    }, (err) => {
     // Handle error
    });

  }

  editSocio(id,title,description,Foto){
    this.navCtrl.push(ListPage, {id:id,title:title,description:description,Foto:Foto});
    console.log("editando " + id + " " + title + "" + description);
    this.navCtrl.push(ListPage);
  }

  deleteSocio(socio){
    this.sociosService.deleteSocio(socio);
    this.navCtrl.push(ListPage);
  }

  deleteComfirm(socio) {
    let alert = this.alertCtrl.create({
      title: 'Confirmación Borrado',
      message: '¿Quieres borrar el Socio?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Clic cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Clic aceptar');
            this.deleteSocio(socio);
          }
        }
      ]
    });
    alert.present()
  }

}
