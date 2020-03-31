import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-categoria',
  templateUrl: './details-categoria.component.html',
  styleUrls: ['./details-categoria.component.css']
})
export class DetailsCategoriaComponent implements OnInit {

  id: number;
  categoria: Categoria;

  constructor(private route: ActivatedRoute,private router: Router,
    private categoriaService: CategoriaService) { }

    ngOnInit() {
      this.categoria = new Categoria();
  
      this.id = this.route.snapshot.params['id'];
      
      this.categoriaService.getCategoria(this.id)
        .subscribe(data => {
          console.log(data)
          this.categoria = data;
        }, error => console.log(error));
    }

    listaCategorias(){
      this.router.navigate(['categorias']);
    }

}
