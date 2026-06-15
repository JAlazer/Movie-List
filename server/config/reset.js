import { pool } from "./database.js";
import './dotenv.js'
import movieList from "../data/movies.js";

async function createMovieTable() {
    //query
    const creationQuery = `
        DROP TABLE IF EXISTS movies;

        CREATE TABLE IF NOT EXISTS movies (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            duration INT NOT NULL,
            letterboxrating DECIMAL(2,1) NOT NULL,
            genre TEXT NOT NULL,
            maincast TEXT[] NOT NULL,
            director TEXT NOT NULL,
            releasedate DATE NOT NULL
        )
    `
    //try awaiting pool query
    try {
        const res = await pool.query(creationQuery);
        console.log('Movies table successfully created!')
    } catch (err) {
        console.error('Could not create table!', err);
    }
}

async function seedMovieTable() {
    // await the creation of the movie table
    await createMovieTable();

    // for each movie, use an insert query, values array, pool the insert query, values, and callback to check for an error
    movieList.forEach((movie) => {
        const insertMovieQuery = {
            text: 'INSERT INTO movies (title, duration, letterboxrating, genre, maincast, director, releasedate) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            movie.Title,
            movie.Duration,
            movie.LetterboxRating,
            movie.Genre,
            movie.MainCast,
            movie.Director,
            movie.ReleaseDate
        ]

        pool.query(insertMovieQuery, values, (error, result) => {
            if (error) {
                console.error('Something went wrong with seeding the movies table!', error);
                return ;
            }

            console.log(`${movie.Title} entered into the table!`)
        })
    })
}


seedMovieTable()