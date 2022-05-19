import { IMAGES_ROUTES } from '@data/constants/routes/images.routes';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export const LOGIN_CONST = {
  ICONS: [
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare
  ],
  LOGO: IMAGES_ROUTES.LOGO,   //TODA ESTA CLAE CREO QUE NO ESTA SIRVIENDO
  BACKGROUD_STYLE: {
    backgroundImage: `url(${IMAGES_ROUTES.BACKGROUND_LOGIN})`
  }
};
