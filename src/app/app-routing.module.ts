import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image/image-upload.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'image',
    pathMatch: 'full'
  },
  {
    path: 'image',
    component: ImageUploadComponent,
    data: { title: 'image' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
