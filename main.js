import './style.css'
import { getCharacters } from './src/akatsuki/akatsuki-app';

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title">The Rick and Morty👽</h1>
    <input id="search" placeholder="Search..."/>
    <div class="card"></div>
  </div>
`
const render = document.querySelector('.card');

getCharacters(render);