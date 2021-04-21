import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [InfoComponent, BlogComponent],
  exports: [InfoComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
