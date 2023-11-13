import { client } from "./bp.js";


export function vibratorElementSetAttr(vibratorEl) {
    
    vibratorEl.setAttribute('type', 'range');
    vibratorEl.setAttribute('min', '0');
    vibratorEl.setAttribute('max', '100');
    vibratorEl.setAttribute('value', '0');
}