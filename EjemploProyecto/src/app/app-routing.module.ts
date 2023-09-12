import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './componets/user/user.component';
import { PostsComponent } from './componets/posts/posts.component';
import { MainComponent } from './componets/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent,canActivate: []},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
