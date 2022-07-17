import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {firstName: '', lastName: '', email: '', password: ''}
  constructor() { }

  ngOnInit(): void {
    this.onRegister()
  }

  onRegister(){
    let x = 11
    console.log(x);
    
    console.log(this.user);
  }

}
