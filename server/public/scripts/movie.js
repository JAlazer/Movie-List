const renderMovies = async () => {
    const response = await fetch('/movies')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(movie => {
            const movieCard = document.createElement('div')
            movieCard.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            // top container info
            const title = document.createElement('h2')
            title.textContent = movie.title
            topContainer.appendChild(title)

            const rating = document.createElement('p')
            rating.textContent = `⭐ ${movie.letterboxrating}`
            topContainer.appendChild(rating)

            const genre = document.createElement('p')
            genre.textContent = movie.genre
            topContainer.appendChild(genre)
            
            // bottom container
            const director = document.createElement('p')
            director.textContent = `Director: ${movie.director}`
            bottomContainer.appendChild(director)

            const duration = document.createElement('p')
            duration.textContent = `Duration: ${movie.duration} min`
            bottomContainer.appendChild(duration)

            const cast = document.createElement('p')
            cast.textContent = `Cast: ${movie.maincast.join(', ')}`
            bottomContainer.appendChild(cast)

            const releaseDate = document.createElement('p')
            releaseDate.textContent =
                `Released: ${new Date(movie.releasedate).toLocaleDateString()}`
            bottomContainer.appendChild(releaseDate)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/movies/${movie.id}`
            bottomContainer.appendChild(link)

            movieCard.appendChild(topContainer)
            movieCard.appendChild(bottomContainer)

            mainContent.appendChild(movieCard)
        })

    } else {
        const noGiftMessage = document.createElement('h2')
        noGiftMessage.textContent = 'No movies Available 😞'
        mainContent.appendChild(noGiftMessage);
    }
}



const renderMovie = async () => {
    const requestID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/movies')
    const data = await response.json()

    const movieContent = document.getElementById('movie-content')

    let movie

    if (data) {
        movie = data.find(movie => movie.id === requestID)
        
    } 

    if (movie) {
        document.getElementById('title').textContent = movie.title;
        document.getElementById('director').textContent = `Director: ${movie.director}`;
        document.getElementById('genre').textContent = `Genre: ${movie.genre}`;
        document.getElementById('duration').textContent = `Duration: ${movie.duration} min`;
        document.getElementById('rating').textContent = `Rating: ⭐ ${movie.letterboxrating}`;
        document.getElementById('cast').textContent = `Cast: ${movie.maincast.join(', ')}`;
        document.getElementById('release-date').textContent =
            `Released: ${new Date(movie.releasedate).toLocaleDateString()}`;
    } else {
        const noGiftMessage = document.createElement('h2')
        noGiftMessage.textContent = 'No movie Available 😞'
        movieContent.appendChild(noGiftMessage);
    }
}


if (document.getElementById('main-content')) {
    renderMovies()
}

if (document.getElementById('movie-content')) {
    renderMovie()
}

