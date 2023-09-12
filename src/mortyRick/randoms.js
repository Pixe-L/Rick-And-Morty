function random() {
    return Math.floor(Math.random() * 42) + 1;
}

export function charactersRandom() {
    let btn = document.getElementById('btn-random');

    btn.addEventListener('click', () => {
        let person = random();
        document.querySelector('.card').innerHTML = '';
        document.body.style.backgroundImage = 'none';
        document.body.style.height = 'auto';

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
    })
}