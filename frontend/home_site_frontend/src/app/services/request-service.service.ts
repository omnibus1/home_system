import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  apiUrl:string = "http://127.0.0.1:8000/api/"
  constructor(private httpClient:HttpClient) { }

  requestGetDevices(){
    return this.httpClient.get(this.apiUrl + "devices/")
  }

  requestTurnDeviceOn(deviceId:number){
    let url = this.apiUrl + "turn_on?id="+deviceId
    console.log(url)
    return this.httpClient.get(url)
  }

    requestTurnDeviceOff(deviceId:number){
    let url = this.apiUrl + "turn_off?id="+deviceId
    console.log(url)
    return this.httpClient.get(url)
  }

}
