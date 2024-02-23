import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Device} from "../../Device";

@Component({
  selector: 'app-gniazdko-item',
  templateUrl: './gniazdko-item.component.html',
  styleUrl: './gniazdko-item.component.css'
})
export class GniazdkoItemComponent {
@Input() device:Device
@Output() turnOn = new EventEmitter<number>()
@Output() turnOff = new EventEmitter<number>()

  canBeTurnedOn(){
    return this.device.status === "off"
  }

  canBeTurnedOff(){
  return this.device.status === "on"
  }

  turnDeviceOn(){
    this.turnOn.emit(this.device.id)
  }

  turnDeviceOff(){
    this.turnOff.emit(this.device.id)
  }

  getColorBasedOnStatus(){
    if(this.device.status === "on"){
      return "#b0fc9f"
    }
    else if(this.device.status === "off"){
      return "#ff8a8a"
    }
    return "#9c9c9c"
  }
}
