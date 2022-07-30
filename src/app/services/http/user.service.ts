import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getAllUsers(){
   return this.http.get(this.baseUrl + '/users')
  }

  getUserById(id:any){
    return this.http.get(`${this.baseUrl}/users/${id}`)
  }

  addNewUser(data:any){
    return this.http.post(`${this.baseUrl}/users`, data)
  }

  updateUserById(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/users/${id}`, data)
  }

  deleteUserById(id: any) {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }
}
