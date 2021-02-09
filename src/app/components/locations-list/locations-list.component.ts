import { Component, OnInit } from '@angular/core';
import { LocationRM } from 'src/app/model/locationRM';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'capgemini-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  locations: LocationRM[];
  //Inyectamos el servicio y obtenemos todas las localizaciones
  constructor(service: LocationService) { 
    this.locations = service.getAllLocations();
  }
  
  ngOnInit(): void {
      
  }

}
