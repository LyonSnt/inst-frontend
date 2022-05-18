import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    SharedModule,     // exportamos desde la carpeta shared por que ahi estan todos los datos necesarios
    UserRoutingModule
  ]
})
export class UserModule { }
