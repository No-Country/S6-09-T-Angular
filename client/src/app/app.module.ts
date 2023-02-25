import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ClassWallComponent } from './class-room/class-wall/class-wall.component';
import { ClassDeliveriesComponent } from './class-room/class-deliveries/class-deliveries.component';
import { ClassMembersComponent } from './class-room/class-members/class-members.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NosotrosComponent,
        ClassWallComponent,
        ClassDeliveriesComponent,
        ClassMembersComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule
    ],
    })
export class AppModule { }
