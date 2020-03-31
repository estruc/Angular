import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component'
import { DetailsCategoriaComponent } from './details-categoria/details-categoria.component';

const routes: Routes = [
  {path: 'categorias', component: ListCategoriaComponent},
  {path: 'adicionarCategoria' , component: CreateCategoriaComponent },
  {path: 'detalhe/:id', component: DetailsCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
