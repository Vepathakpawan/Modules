import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomeModule } from './home/home.module';
import{ProductModule}from './product/product.module';
import { UsersModule} from './users/users.module';
const routes: Routes = [
  {
    path: 'home',
    component: HomeModule
  },
  
  {
    path: 'Product',
    component :ProductModule
  },
  
  {
    path : 'Users',
    component: UsersModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
},
)
export class AppRoutingModule { }
