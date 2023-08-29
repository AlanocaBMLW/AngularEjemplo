import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './componets/user/user.component';
import { PostsComponent } from './componets/posts/posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './componets/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
