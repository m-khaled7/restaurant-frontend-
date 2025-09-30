import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const routes: Routes = [
    {path:"",component:Home,title:"Guasto Restaurant"},
    {path:"contacts",component:Contact,title:"Contact US"},
    {path:"about",component:About,title:"About Us"},
    {path:"login",component:Login,title:"Login"},
    {path:"signup",component:Signup,title:"Sign Up"},
    
];
