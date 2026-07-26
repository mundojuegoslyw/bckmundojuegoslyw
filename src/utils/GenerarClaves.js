// generar-hash.js
import CryptoJS from 'crypto-js';

const nuevoUsuario = "gordita";
const nuevaClave = "4756812";

console.log("userHash:", CryptoJS.SHA256(nuevoUsuario).toString(CryptoJS.enc.Hex));
console.log("passwordHash:", CryptoJS.SHA256(nuevaClave).toString(CryptoJS.enc.Hex));