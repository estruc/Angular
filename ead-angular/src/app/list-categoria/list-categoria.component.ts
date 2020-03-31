import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {

  categorias: Observable<Categoria[]>

  constructor(private categoriaService: CategoriaService,
    private router: Router) {}

  ngOnInit(): void {
    this.getListaCategorias();
  }


  getListaCategorias() {
    this.categorias = this.categoriaService.getCategoriaList();
  }

  apagarCategoria(id: number) {
    this.categoriaService.deleteCategoria(id)
      .subscribe(
        data => {
          console.log(data);
          this.recarregarListaCategoria();
        },
        error => console.log(error));
  }


  recarregarListaCategoria() {
    this.categorias = this.categoriaService.getCategoriaList();
  }

  categoriaDetalhe(id: number){
    this.router.navigate(['detalhe', id]);
  }

  alterarCategoria(id: number){
    this.router.navigate(['alterarCategoria', id]);
  }

}
