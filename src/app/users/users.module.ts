import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [LoginComponent, ContactComponent],
  exports: [LoginComponent],

  imports: [
    CommonModule
  ]
})
export class UsersModule { }
