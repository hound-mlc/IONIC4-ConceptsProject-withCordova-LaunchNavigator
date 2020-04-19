import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/model/Libro';
import { ApiuserService } from 'src/app/apiuser.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  libroCargado : Libro;
  constructor(private activatedRoute: ActivatedRoute, private apiuser: ApiuserService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idLibro')) {
        // redirect
        return;
      }
      const libroId = paramMap.get('idLibro');
      this.libroCargado = this.apiuser.getLibro(libroId);
    });
  }

  borrar(){
    this.apiuser.borrarLibro(this.libroCargado);
    this.router.navigate(["tulista"]);
  }

}
