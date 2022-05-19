import { ILeftNavMenu } from "@data/interfaces";
import { faUser, faCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LEFT_NAV_MENUS: ILeftNavMenu[] = [
  {
    titulo: 'Mi cuenta',
    links: [
      {
        icon: faUser,
        nombre: 'Perfil'
      },
      {
        icon: faCog,
        nombre: 'Mi cuenta'
      },
      {
        icon: faClipboard,
        nombre: 'Historial'
      },
      {
        icon: faComment,
        nombre: 'Comenatrios'
      }
    ]
  },
  {
    titulo: 'Servicios',
    links: [
      {
        icon: faYoutube,
        nombre: 'Videos'
      },
      {
        icon: faHeart,
        nombre: 'Favoritos'
      },
      {
        icon: faBookmark,
        nombre: 'Articulos'
      },
      {
        icon: faChartLine,
        nombre: 'Estadisticas'
      },
      {
        icon: faCogs,
        nombre: 'Configuracion'
      }
    ]
  }
];
