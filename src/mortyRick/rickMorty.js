function addBackground() {
    document.body.style.backgroundImage = 'url(./assets/RandM.jpg)';
    document.body.style.backgroundSize = 'cover';
}


export function getCharacters() {
    let search = document.getElementById('search');
    let btn = document.getElementById('btn-random');

    function random() {
        return Math.floor(Math.random() * 42) + 1;
    }

    addBackground();
    document.body.style.height = '100vh';

    btn.addEventListener('click', () => {
        let person = random();
        document.querySelector('.card').innerHTML = '';
        document.body.style.backgroundImage = 'none';


        fetch(`https://rickandmortyapi.com/api/character/?page=${person}`)
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
    })


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