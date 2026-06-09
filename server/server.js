import express from 'express'
import moviesRouter from './routes/movies.js'


const app = express();

app.use('/movies', moviesRouter)
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

app.get('/', (req, res) => {
	res.status(200).send('Movie list okay!');
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
})

app.get('*', function(req, res){
	res.status(404).send("Error 404!")
})
