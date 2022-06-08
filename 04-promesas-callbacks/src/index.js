import { buscarHeroe,buscarHeroeAsync } from "./js/promesas";

buscarHeroe( 'capi' ).then( heroe => console.log (heroe) );