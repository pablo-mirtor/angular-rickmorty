import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LocationRM } from 'src/app/model/locationRM';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'capgemini-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  location: LocationRM;
  //Inyectamos los routers y el servicio
  constructor(private route: ActivatedRoute, private router: Router, private service: LocationService) {
  }
//Cargamos el nombre del enlace, y buscamos en el servicio la localización asociada a dicho nombre
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let name = params.get('name');
      this.location = this.service.getLocationByName(name);
      console.log(this.location);
    });
  }
  //Redirigir a location
  goBackToLocationList(){
      this.router.navigate(["/location"]);
  }

}
