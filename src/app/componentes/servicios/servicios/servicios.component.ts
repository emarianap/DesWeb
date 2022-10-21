import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/productos.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  ProductosList: any []=[]; // 
item: any;
  constructor(private ProductoSvc: ProductoService) { // 
    this.ProductoSvc.getAll().subscribe((result:any)=>{
      this.ProductosList = result;
      console.log(result)
    })
   }

  ngOnInit(): void {
  }

}
