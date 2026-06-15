import { pool } from "../config/database.js"


export async function getMovies(req, res) {
    const selectionQuery = `SELECT * FROM movies ORDER BY title ASC;`


    try{
        const movies = await pool.query(selectionQuery);
        res.status(200).json(movies.rows);
    } catch (err) {
        res.status(409).json({error: err.message})
        console.error("Something went wrong with retrieving the movies", err);
    }
}