import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent implements OnInit {
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
  
    updateCategoria() {
      this.categoriaService.updateCategoria(this.id, this.categoria)
        .subscribe(data => console.log(data), error => console.log(error));
      this.categoria = new Categoria();
      this.gotoListCategoria();
    }
  
    onSubmit() {
      this.updateCategoria();    
    }
  
    gotoListCategoria() {
      this.router.navigate(['/categorias']);
    }

}
