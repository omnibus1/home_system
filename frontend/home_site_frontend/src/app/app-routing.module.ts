import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeScreenComponent} from "./home-screen/home-screen.component";
import {GniazdkaPageComponent} from "./gniazdka-screen/gniazdka-page/gniazdka-page.component";

const routes: Routes = [
  {path: '', component:HomeScreenComponent},
  {path: 'gniazdka', component:GniazdkaPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
