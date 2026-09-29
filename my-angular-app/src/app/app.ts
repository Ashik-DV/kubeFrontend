import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Login } from './login/login'
// import { Dashbord } from './page/dashbord/dashbord'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
