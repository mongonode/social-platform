import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { BodyComponent } from './Components/Layout/body/body.component';
import { SiderComponent } from './Components/Layout/sider/sider.component';
import { PostsComponent } from './Components/Contents/posts/posts.component';
import { VideosComponent } from './Components/Contents/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SiderComponent,
    PostsComponent,
    VideosComponent,
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
