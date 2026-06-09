import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import movieList from '../data/movies.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(movieList)
})

router.get('/:movieId', (req, res) => {
    const movieId = Number(req.params.movieId)

    const movie = movieList.find(
        movie => movie.id === movieId
    )

    if (!movie) {
        return res.status(404).sendFile(
            path.resolve(__dirname, '../public/404.html')
        )
    }

    res.status(200).sendFile(path.resolve(__dirname, '../public/movie.html'))
})

export default router;