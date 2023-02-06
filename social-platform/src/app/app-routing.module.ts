import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './Components/Contents/posts/posts.component';
import { VideosComponent } from './Components/Contents/videos/videos.component';
import { BodyComponent } from './Components/Layout/body/body.component';

const routes: Routes = [
  {
    path:'',
    component:BodyComponent,
    children: [
      {
        path:'',
        component:PostsComponent
      },

      {
        path:'videos',
        component:VideosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
