const movies = {};

$('form').on('submit', function(e) {
    e.preventDefault();
    let movie = $('#movie').val();
    let rating = $('#rating').val();
    movies[movie] = rating;
    $('ul').append(`<li>${movie} : ${rating}  <button>x</button></li>`);
});

$('ul').on('click', 'button', function() {
    $(this).parent().remove();
});

$('#rating').attr({
    "min": 1,
    "max": 10
});

$('#movie').attr({
    "minlength":2
});

$('#sort-by-title').on('click', function() {
    let sortedMovies = Object.keys(movies).sort();
    $('ul').text('');
    for (let movie of sortedMovies) {
        $('ul').append(`<li>${movie} : ${movies[movie]}  <button>x</button></li>`); 
    }
});

$('#sort-by-rating').on('click', function() {
   let sorted = [];
    for (let movie in movies) {
        sorted.push([movie, movies[movie]]);
    }
    sorted.sort((a,b) => a[1] - b[1]);
    $('ul').text('');
    for (let movie of sorted) {
        $('ul').append(`<li>${movie[0]} : ${movie[1]}  <button>x</button></li>`); 
    }
});


