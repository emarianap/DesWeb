import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = 'assets/data/productos.json';

@Injectable({
    providedIn: 'root',
})

export class ProductoService{
    constructor(private http: HttpClient) {}

    getAll(){
        return this,this.http.get(URL)
    }
}
