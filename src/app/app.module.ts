import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './components/footer/footer.component';
import { FirstComponent } from './pages/first/first.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'first', component: FirstComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FirstComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
