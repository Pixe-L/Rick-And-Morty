export function getCharacters() {
    let search = document.getElementById('search');
    let character = '';

    search.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            character = search.value

            // fetch("https://rickandmortyapi.com/api/character/")
            document.querySelector('.card').innerHTML = '';

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
                                    <h2 class="name">${person.name}</h2>
                                    <span class="location">${person.location.name}</span>
                                    <span class="state">${person.status}</span>
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