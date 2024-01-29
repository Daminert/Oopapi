class Movie {
  constructor(title, genre, releaseYear, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.availableCopies = availableCopies;
  }

  rentCopy() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      return true;
    } else {
      return false;
    }
  }

  returnCopy() {
    this.availableCopies++;
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  findMovie(title) {
    return this.movies.find(movie => movie.title === title);
  }
}

// Usage example
const movieStore = new MovieStore();

// Adding movies to the store
movieStore.addMovie(new Movie("Inception", "Sci-Fi", 2010, 5));
movieStore.addMovie(new Movie("The Dark Knight", "Action", 2008, 3));

// Renting a movie
const inception = movieStore.findMovie("Inception");
if (inception) {
  if (inception.rentCopy()) {
    console.log("You have rented a copy of Inception.");
  } else {
    console.log("Sorry, Inception is currently out of stock.");
  }
}
