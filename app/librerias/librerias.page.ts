import { Component, OnInit, Inject } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ApiuserService } from '../apiuser.service';

@Component({
  selector: 'app-librerias',
  templateUrl: './librerias.page.html',
  styleUrls: ['./librerias.page.scss'],
})
export class LibreriasPage implements OnInit {

  constructor(@Inject(LaunchNavigator)private launchNavigator: LaunchNavigator, private apiuser: ApiuserService) { }

  ngOnInit() {
  }

  //source: any = [22.303894, 70.802160] // source lat,long
  


  navigate(destination: any[]){

    this.launchNavigator.navigate(destination)
      .then(
        success => alert('Hola paquito'),
        error => alert('Error: '+error)
    );
  }

}
