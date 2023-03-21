import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path:'', component:AppComponent,
    children:[
      {path: '', component:LoginComponent},
    ]
  }
 
  // {path: 'home', component:HomeComponent},
  // {path: 'user',component:UserComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
