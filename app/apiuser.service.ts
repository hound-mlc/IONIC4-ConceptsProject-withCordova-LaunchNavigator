import { Injectable } from '@angular/core';
import { Libro } from './model/Libro';
import { Libreria } from './model/Libreria';

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {

  constructor() { }

  public listaLibros: Libro[] = [new Libro(1,"Tito Andrónico",
                                          "Un general romano ve su vida atrapada en la desgracia en un bucle de venganzas que le llevará a las más violentas y desafortunadas de las desdichas.",
                                          "https://images-eu.ssl-images-amazon.com/images/I/51iZ9hlWvTL.jpg",
                                          "William Shakespeare",
                                          "Tragedia",8),
                                  new Libro(2,"Memorias de Idhun: La Resistencia",
                                          "Un guerrero y un mago exiliados del planeta de Idhún buscan en La Tierra formar un ejercíto para vencer a Ashran El Nigromante, tirano rey de Idhún y a su hijo Kirtash",
                                          "https://imagessl5.casadellibro.com/a/l/t5/95/9788467502695.jpg",
                                          "Laura Gallego",
                                          "Fantasía",9)];
  
  public librerias: Libreria[] = [new Libreria("Livraria Ler Devagar","R. Rodrigues de Faria 103 - G 0.3, 1300-501 Lisboa, Portugal",
                                  [38.7027982,-9.1784257],"https://lisboacool.com/sites/default/files/styles/ny_article_horizontal__w720xh480_watermark/public/imagens/artigos/livraria-ler-devagar16.jpg"),
                                  new Libreria("Barter Books","Alnwick Station, Wagon Way Rd, Alnwick NE66 2NP, Reino Unido",
                                  [55.410322,-1.699643],"https://media-cdn.tripadvisor.com/media/photo-s/11/af/f5/d4/barter-books.jpg")];

  getLibro(id){
    for (let index = 0; index < this.listaLibros.length; index++) {
      if (this.listaLibros[index].idLibro == id) return this.listaLibros[index];
    }
    return null;
  }

  borrarLibro(libro: Libro){
    let indice = this.listaLibros.indexOf(libro);
    this.listaLibros.splice(indice,1);
  }
}
