import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName: any;
    password: any;
  }
  submitOnClick = () => {
    console.log('Function call from Login');
    console.log(this.userName);
    console.log(this.password);
  };


}
