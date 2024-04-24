class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG"; // Set default rating to "PG" if not provided
    }

    static getPG(movieList) {
        return movieList.filter(movie => movie.rating === "PG");
    }
}

// Creating instances of Movie
const mov1 = new Movie("KGF", "Annapoorna");
const mov2 = new Movie("RRR", "gold", "5");
const mov3 = new Movie("Pushpa", "silver", "5");
const mov4 = new Movie("Radhe Shyam", "platinum");
const mov5 = new Movie("inspector rishi", "diamond");
// Example usage of getPG method
const movieArray = [mov1, mov2, mov3, mov4,mov5];
const pgMovies = Movie.getPG(movieArray);
console.log(pgMovies);

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);


// console
// [
//   Movie { title: 'KGF', studio: 'Annapoorna', rating: 'PG' },
//   Movie { title: 'Radhe Shyam', studio: 'platinum', rating: 'PG' },
//   Movie { title: 'inspector rishi', studio: 'diamond', rating: 'PG' }
// ]
// Movie {
//   title: 'Casino Royale',
//   studio: 'Eon Productions',
//   rating: 'PG-13'
// }
