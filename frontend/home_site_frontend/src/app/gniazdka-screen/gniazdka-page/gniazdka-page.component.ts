import {Component, OnInit} from '@angular/core';
import {RequestServiceService} from "../../services/request-service.service";
import {Device} from "../../Device";
@Component({
  selector: 'app-gniazdka-page',
  templateUrl: './gniazdka-page.component.html',
  styleUrl: './gniazdka-page.component.css'
})
export class GniazdkaPageComponent implements OnInit{
  devices:Device[] = []
  error: boolean = false
  isLoading: boolean = true
  constructor(private requestService:RequestServiceService) {}

  ngOnInit() {
    this.requestService.requestGetDevices().subscribe(
      (val:any)=>{
        this.devices = val
        this.isLoading = false
      },
      error=> this.error = true
    )
  }

  turnDeviceOn(deviceId:number){
    this.isLoading = true
    this.requestService.requestTurnDeviceOn(deviceId).subscribe(
      (val:any)=>{
        this.devices = val
        this.isLoading = false
      }
    )
  }

  turnDeviceOff(deviceId:number){
    this.isLoading = true
    this.requestService.requestTurnDeviceOff(deviceId).subscribe(
      (val:any)=>{
        this.devices = val
        this.isLoading = false
      }
    )
  }
}
