import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { EstructuraComponent } from './layout/estructura/estructura.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { LeftNavMenuComponent } from './layout/left-nav/left-nav-menu/left-nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EstructuraComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    LeftNavComponent,
    LeftNavMenuComponent
  ],
  imports: [
    BrowserModule,

    //CORE,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,    //CON ESTO QUITAMOS EL GATO DE ANGULAR QUE APARECE AL PRINCIPIO
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
