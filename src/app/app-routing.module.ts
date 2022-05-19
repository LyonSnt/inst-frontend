import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from '@layout/estructura/estructura.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login', // es para que redireccione directamente de form exacta
    pathMatch: 'full'
  },
  {
    path: 'auth', //esta parte es para redireccionar al login
    loadChildren: () =>
    import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'panel',
    component: EstructuraComponent, //esta parte es para que se visualice lo que esta en estructura en el app component
    children: [
      {
        path: 'user',
        loadChildren: ()=> //esto hace que se cargue la informacion como se vaya necesitando
        import('@modules/user/user.module').then( (m) => m.UserModule) //carga todos los modulos cuando esten ya listas
      }/* ,
      {
        path: '**', // toda esta parte es para que cuando se ponga una ruta que no exista nos redirija a panel user
        redirectTo: '/panel/user', //hay que poner a la vista que tiene que ir por defecto
        pathMatch: 'full'
      } */
    ]
  },
  {
    path: '**', // toda esta parte es para que cuando se ponga una ruta que no exista nos redirija a panel user
    redirectTo: '/auth/login', //hay que poner a la vista que tiene que ir por defecto
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], //EL USEHASH ES PARA QUE QUITE EL GATO INICIAL DE ANGULAR AL MOMENTO DE AGREGAR LA RUTA
  exports: [RouterModule]
})
export class AppRoutingModule { }
