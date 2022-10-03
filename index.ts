import { round } from "mathjs";


export function zweiNachkommastellen(n: number) {
    return round(n, 2);
}