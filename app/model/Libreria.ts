export class Libreria {
    nombreLibreria: String;
    direccion: String;
    coordenadas: any[];
    imagen: String;

    constructor(nombreLibreria: String, direccion: String, coordenadas: any[], imagen:String){
        this.nombreLibreria=nombreLibreria;
        this.direccion=direccion;
        this.coordenadas=coordenadas;
        this.imagen=imagen;
    }
}