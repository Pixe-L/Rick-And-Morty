import { charactersRandom } from "./randoms";

function addBackground() {
    document.body.style.backgroundImage = 'url(./assets/RandM.jpg)';
    document.body.style.backgroundSize = 'cover';
}
export function getCharacters() {
    let search = document.getElementById('search');

    addBackground();
    charactersRandom();
    document.body.style.height = '100vh';

    search.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            let character = search.value
            document.querySelector('.card').innerHTML = '';
            document.body.style.backgroundImage = 'none';
            document.body.style.height = 'auto';

            fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.results) {
                        data.results.forEach((person) => {
                            const article = document.createRange().createContextualFragment(
                                `
                            <article class="card-container">
                                <div class="image-container">
                                    <img src="${person.image}" alt="character image">
                                </div>
                                <div class="data">
                                <h2 class="name">${person.name} ${person.gender == 'Female' ? '♀' : '♂'}</h2>
                                <span class="state"><span>${person.status == 'Alive' ? '🟢' : person.status == 'unknown' ? '⚪' : '🔴'}</span>${person.status} - ${person.species}</span><br/><br/>
                                <b>Type</b><br/>
                                <span class="location">${!person.type ? 'unknown' : person.type}</span><br/><br/>
                                <b>Origin</b><br/> 
                                <span class="location">${person.origin.name}</span><br/><br/>
                                <b>Location</b><br/> 
                                <span class="location">${person.location.name}</span>
                                </div>
                            </article>
                        `
                            );
                            document.querySelector('.card').appendChild(article);
                        });
                    } else {
                        alert('No se encontraron datos.');
                    }
                })
                .catch((error) => {
                    alert('Ocurrió un error: ' + error.message);
                });
        }
    });
}