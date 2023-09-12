import './style.css'
import { getCharacters } from './src/mortyRick/rickMorty';

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title">The Rick and Morty!</h1>
    <input id="search" placeholder="Search..."/> <br/>
    <button id="btn-random">Randoms...</button>
    <div class="card"></div>
  </div>
`
const render = document.querySelector('.card');

getCharacters(render);