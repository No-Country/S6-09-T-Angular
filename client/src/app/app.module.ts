import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomePageComponent,
        NosotrosComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
        
    ]
})
export class AppModule { }
