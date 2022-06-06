import {buscarHeroe} from './js/callbacks'
import './styles.css';

const heroeId = 'capi2';

buscarHeroe( heroeId, (err, heroe) =>{
    if (heroe) {
        console.log (heroe);
    } else {
        console.error ('ALGO SALIO MAL')
    }
    
});