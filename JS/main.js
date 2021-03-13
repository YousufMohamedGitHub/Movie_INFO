let imageURL = "https://image.tmdb.org/t/p/w500/"

$(document).ready(() => {
    
    $('#searchForm').on('submit', (e) => {
       
       let searchText = $('#searchText').val();
       getMovies(searchText);
        e.preventDefault();
    });
});
function getMovies(search){
axios.get('https://api.themoviedb.org/3/search/movie?api_key='+ search)
    .then( (res) => {

        let movies = res.data.results;
        let output = '';

        $.each(movies, (index, movie) => {
            output += `
                <div class="col-4"> 
                <div class="well text-center">
                <img src= ${imageURL + movie.poster_path}>

                <h5>${movie.original_title}</h5>
                <a class="btn btn-primary" href=${"https://www.themoviedb.org/movie/" + movie.id}>Details</a>
                </div>
                
                </div>
            
            
            
            `;
        });

        $('#movies').html(output);
    })
    .catch( (err) => {
        console.log(err);
    })

    
}