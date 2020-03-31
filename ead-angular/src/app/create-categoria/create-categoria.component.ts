import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  submitted = false;

  constructor(private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  criarCategoria(): void {
    this.submitted = false;
    this.categoria = new Categoria();
  }

  gravarCategoria() {
    this.categoriaService.createCategoria(this.categoria)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categoria = new Categoria();
    this.gotoListCategorias();
  }

  gotoListCategorias() {
    this.router.navigate(['/categorias']);
  }

  onSubmit() {
    this.submitted = true;
    this.gravarCategoria();    
  }

}
