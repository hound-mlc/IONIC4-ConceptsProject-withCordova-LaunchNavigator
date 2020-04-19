import { Component, OnInit } from '@angular/core';
import { ApiuserService } from '../apiuser.service';

@Component({
  selector: 'app-tulista',
  templateUrl: './tulista.page.html',
  styleUrls: ['./tulista.page.scss'],
})
export class TulistaPage implements OnInit {

  constructor(private apiuser:ApiuserService) { }

  ngOnInit() {
  }

}
