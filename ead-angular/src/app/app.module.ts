import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { DetailsCategoriaComponent } from './details-categoria/details-categoria.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoriaComponent,
    DetailsCategoriaComponent,
    ListCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
