import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { DetailsCategoriaComponent } from './details-categoria/details-categoria.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoriaComponent,
    DetailsCategoriaComponent,
    ListCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
