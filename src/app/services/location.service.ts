import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationRM } from '../model/locationRM';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations: LocationRM[] = [];

  constructor(private httpClient: HttpClient) { }

  //Llamamos a la API con http. Comprobamos que el array no esté vacío para no hacer llamadas innecesarias
  // y transformamos el json en un array de Locations
  getAllLocations(): LocationRM[]{
    if(this.locations.length === 0)
      this.httpClient.get<any[]>('https://rickandmortyapi.com/api/location/3,21').subscribe((data) => {
        data.forEach((l) => this.locations.push(new LocationRM(l.id, l.name, l.type, l.dimension ,l.residents.length)));
      });
    return this.locations;
  }
  //Buscamos en nuestro array el valor asociado al nombre
  getLocationByName(name: string): LocationRM{
    let result = this.locations.find((l) => l.name === name);
    return result;
  }
}
