import { Injectable } from '@angular/core';

@Injectable()
export class SociosService{
    socios = [
        {id:1, Rut:'12345678-9', Nombres: 'Juan Jose', ApellidoPaterno: 'Perez' ,  ApellidoMaterno: 'Toledo', FechaNacimiento: '23/02/1998', Direccion: 'Pasaje Uno 123', Telefono:'934534545', Email: 'fundacion@fundacion.cl', ImgUrl:'assets/imgs/user.png'},
        {id:2, Rut:'12345678-9', Nombres: 'Gonzalo Mateo', ApellidoPaterno: 'Maranda' ,  ApellidoMaterno: 'Echeverria', FechaNacimiento: '23/02/1998', Direccion: 'Pasaje 2 493', Telefono:'9437563785', Email: 'fundacion@fundacion.cl', ImgUrl:'assets/imgs/user.png'},
        {id:3, Rut:'12345678-9', Nombres: 'Marcos Alejandro', ApellidoPaterno: 'Gonzalez' ,  ApellidoMaterno: 'Hernandez', FechaNacimiento: '23/02/1998', Direccion: 'Pasaje 3 594', Telefono:'989430234', Email: 'fundacion@fundacion.cl', ImgUrl:'assets/imgs/user.png'},
    ];

    public getSocios(){
        return this.socios;
    }

    public getSocio(id){
        return this.socios.filter(function(e, i){ return e.id == id})[0] || {id:null, Rut:null, Nombres:null, ApellidoPaterno:null,  ApellidoMaterno:null, FechaNacimiento:null, Direccion:null, Telefono:null, Email:null, ImgUrl:null};
    }

    public createSocio(socio){
        this.socios.push(socio);
    }

    

    public deleteSocio(socio){
        console.log(socio.id);
        var index = this.socios.indexOf(socio);
        if (index > -1) {
            this.socios.splice(index, 1);
        }
    }
}
