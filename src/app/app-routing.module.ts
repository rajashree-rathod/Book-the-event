import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FictionBookComponent } from './fiction-book/fiction-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './services/authguard.guard';
import { BookInfoComponent } from './user/book-info/book-info.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
      {path: '', component:HomeComponent, children: [
        {path: '', component:LoginComponent},
        {path: 'user',component:UserComponent,canActivate:[AuthguardGuard] },
        {path: 'user/:id', component:BookInfoComponent},
        // {path:'user/fiction', component:FictionBookComponent,}
      ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
