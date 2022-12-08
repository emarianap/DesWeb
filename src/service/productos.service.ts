import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})

export class ProductoService{
    constructor(private http: HttpClient) {}
    URL = "http://localhost/back/";
    getAll(){
        return this.http.get(`${this.URL}getall.php`);
    }

    agregar(producto:string){

        return this.http.post(`${this.URL}post.php`,JSON.stringify(producto));

    }
}

