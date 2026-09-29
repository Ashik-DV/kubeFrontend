import { Component } from '@angular/core';
import { submit } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {


  constructor(private router: Router){

  }
   username=''
   password=''
  submithandle(){
    console.log(this.username);
    console.log(this.password);
    if(this.username=="admin" && this.password=="ashik"){
      this.router.navigate(['/dashbord'])
    }
  }
}
