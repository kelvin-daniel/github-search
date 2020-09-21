import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    private username:string;
    private clientid='84c1e6c7734ac7f567f3';

  constructor(private http: HttpClient) {
    console.log("service ready!");
    this.username = 'kelvin-daniel';
   }
// http://api.github.com/users/kelvin-daniel

   getProfileInfo(){
     return this.http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.clientid );
   }

   getProfileRepos(){
    return this.http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid );
   } 

   updateProfile(username:string){
     this.username = username;
   }
}
