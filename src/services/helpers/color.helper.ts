import sha256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex';

export class ColorHelper {
    static generateColorFromString(text: string) {
        return '#' + Hex.stringify(sha256(text)).substring(0,6);
    }
}