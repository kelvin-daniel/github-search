import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    private username:string;
    private clientid='84c1e6c7734ac7f567f3';
    private clientsecret = '2c29f0d4677bd9e3490b748416925264e2d6fd2a';

  constructor(private http: HttpClient) {
    console.log("service ready!");
    this.username = 'kelvin-daniel';
   }
// http://api.github.com/users/kelvin-daniel

   getProfileInfo(){
     return this.http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret);
   }

   getProfileRepos(){
    return this.http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   } 

   updateProfile(username:string){
     this.username = username;
   }
}
