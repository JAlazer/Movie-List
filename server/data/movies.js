
/**

 * A movie is something that contains the following information:

 * 	- Title -> string

 * 	- Duration (in minutes) -> number

 * 	- LetterboxRating -> number

 * 	- Genre -> string

 * 	- MainCast -> Array of strings

 * 	- Director -> string

 * 	- ReleaseDate -> Date
 */

const movieList = [
  {
    id: 1,
    Title: "The Dark Knight",
    Duration: 152,
    LetterboxRating: 4.5,
    Genre: "Action",
    MainCast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    Director: "Christopher Nolan",
    ReleaseDate: new Date("2008-07-18")
  },
  {
    id: 2,
    Title: "Parasite",
    Duration: 132,
    LetterboxRating: 4.6,
    Genre: "Thriller",
    MainCast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    Director: "Bong Joon-ho",
    ReleaseDate: new Date("2019-05-30")
  },
  {
    id: 3,
    Title: "Spirited Away",
    Duration: 125,
    LetterboxRating: 4.5,
    Genre: "Animation",
    MainCast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    Director: "Hayao Miyazaki",
    ReleaseDate: new Date("2001-07-20")
  },
  {
    id: 4,
    Title: "Inception",
    Duration: 148,
    LetterboxRating: 4.3,
    Genre: "Science Fiction",
    MainCast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    Director: "Christopher Nolan",
    ReleaseDate: new Date("2010-07-16")
  },
  {
    id:5,
    Title: "The Grand Budapest Hotel",
    Duration: 99,
    LetterboxRating: 4.2,
    Genre: "Comedy",
    MainCast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan", "Willem Dafoe"],
    Director: "Wes Anderson",
    ReleaseDate: new Date("2014-03-28")
  }
];

export default movieList

