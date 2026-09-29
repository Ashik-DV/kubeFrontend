import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashbord } from './page/dashbord/dashbord';

export const routes: Routes = [{path :'', component:Login},{
    path :'dashbord', component:Dashbord
}];
