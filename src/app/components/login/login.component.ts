import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  componentName = 'Login';
  name: string ='Hatem DAGBOUJ'
  age?: number
  country : string | null = null
  countries : string[]= ['Tunisia', 'U.K'] // : Array<string>
  student : {firstName:string, lastName: string, age?: number} =
   {firstName: 'Hatem', lastName: 'Dagbouj'}
   isInvalid = true;
  constructor() { }

  ngOnInit(): void {
  }

  sortir()
  {
    console.log('sortir');
  }

}
