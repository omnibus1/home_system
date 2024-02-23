import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GniazdkaPageComponent } from './gniazdka-screen/gniazdka-page/gniazdka-page.component';
import { HttpClientModule} from '@angular/common/http';
import { GniazdkoItemComponent } from './gniazdka-screen/gniazdko-item/gniazdko-item.component';
import { SpinnerComponent } from './utils/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavbarComponent,
    GniazdkaPageComponent,
    GniazdkoItemComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
