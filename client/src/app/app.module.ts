import { LOCALE_ID, NgModule } from '@angular/core';
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
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import localeEsCO from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsCO );

const config: SocketIoConfig = { url: environment.baseUrl, options: {} };


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NosotrosComponent,
        ClassWallComponent,
        ClassDeliveriesComponent,
        ClassMembersComponent,
        
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-CO' }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        SocketIoModule.forRoot(config)
    ],
    })
export class AppModule { }
