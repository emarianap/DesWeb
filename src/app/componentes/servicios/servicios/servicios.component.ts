import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/productos.service';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

 
  ProductosList: any []=[]; // 
item: any;
 productForm= new FormGroup({

  id_producto:new FormControl(''),
  producto:new FormControl(''),
  Descripcion:new FormControl('')

}); 
  constructor(private ProductoSvc: ProductoService) { // 
    
   }

  ngOnInit(): void {
    this.MostrarTodos();
  }

  MostrarTodos(){

    this.ProductoSvc.getAll().subscribe((result:any)  =>

    this.ProductosList=result);

    console.log(this.ProductosList+"hola 1");

  }

  Agregar():void{

    this.ProductoSvc.agregar(this.productForm.value).subscribe(()=>{

      this.MostrarTodos();

      this.productForm.reset();

    })

  }

}
