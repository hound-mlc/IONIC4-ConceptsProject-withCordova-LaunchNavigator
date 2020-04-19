
export class Libro {
    idLibro: Number;
    titulo: String;
    argumento: String;
    imagen: String;
    autor: String;
    genero: String;
    nota: Number;

    constructor(idLibro: Number, titulo: String, argumento: String, imagen: String, autor: String, genero: String, nota: Number = 0){
        this.idLibro=idLibro;
        this.titulo=titulo;
        this.argumento=argumento;
        this.imagen=imagen;
        this.autor=autor;
        this.genero=genero;
        this.nota=nota;
    }
}