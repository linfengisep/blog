import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { Routes,RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes = [
    {path:'posts',component:PostListComponent,canActivate:[AuthGuardService]},
    {path:'posts/:id',component:PostDetailComponent,canActivate:[AuthGuardService]},
    {path:'edit',component:EditPostComponent, canActivate:[AuthGuardService]},
    {path:'users',component:UserListComponent, canActivate:[AuthGuardService]},
    {path:'new-user',component:NewUserComponent},
    {path:'auth',component:AuthComponent},
    {path:'',component:PostListComponent},
    {path:'not-found',component:FourOhFourComponent},
    {path:'**',redirectTo: '/not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListComponent,
    AuthComponent,
    PostDetailComponent,
    FourOhFourComponent,
    EditPostComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
