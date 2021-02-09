import { NumberSymbol } from "@angular/common";
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
/*Clase que maneja la entidad Location, llamada LocationRM por conflicto con otra librería*/ 
export class LocationRM {
    id: number;
    name: string;
    type: string;
    dimension: number;
    residents: number;

    constructor(id: number, name:string, type:string, dimension:number, residents: number){
        this.id = id;
        this.name= name;
        this.type = type;
        this.dimension = dimension;
        this.residents = residents;
    }
}
