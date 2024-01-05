class Movie {
    title: string;
    studio: string;
    rating: string;

    constructor(title: string, studio: string, rating: string = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies: Movie[]): Movie[] {
        return movies.filter(movie => movie.rating === "PG");
    }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


const moviesArray: Movie[] = [
    casinoRoyale,
    new Movie("Leo", "AVM", "PG"),
    new Movie("Master", "PVR", "R"),
    new Movie("Beast", "Luxe", "PG"),
];


const pgMovies = Movie.getPG(moviesArray);
console.log(pgMovies);

