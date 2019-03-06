/* Exercise:

In the index.html create two textboxes for searching movie title and movie year. Create a button also. Upon clicking the button, it will hit the OMDB API URL with your api key and title and year query parameter(ex. t=scarface&y=1983). And it will return the JSON.

And ofcourse, you need to create JS file with Xml request object thing.

*/


const apiUrl='http://www.omdbapi.com/?';
const apiKey='*******'; ////PLEASE USE YOUR OWN API KEY


function searchMovie(){
    let movieTitle=document.getElementById('movie_title').value;
    let movieYear=document.getElementById('movie_year').value;

    let fullUrl=apiUrl+'apikey='+apiKey+'&t='+movieTitle+'&y='+movieYear;
    
    
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
        //console.log(xhr.responseText);
        //let myData=xhr.responseText;
        formatMovieData(xhr.responseText);
      }
    }
    xhr.open('GET',fullUrl,true);
    xhr.send();
}

/*
{Title: "Scarface", 
Year: "1983", 
Rated: "R", 
Released: "09 Dec 1983", Runtime: "170 min", …}
Actors: "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio"
Awards: "Nominated for 3 Golden Globes. Another 4 nominations."
BoxOffice: "$656,161"
Country: "USA"
DVD: "30 Sep 2003"
Director: "Brian De Palma"
Genre: "Crime, Drama"
Language: "English, Spanish"
Metascore: "65"
Plot: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed."
Poster: "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
Production: "Universal Films"
Rated: "R"
Ratings: (3) [{…}, {…}, {…}]
Released: "09 Dec 1983"
Response: "True"
Runtime: "170 min"
Title: "Scarface"
Type: "movie"
Website: "N/A"
Writer: "Oliver Stone (screenplay by)"
Year: "1983"
imdbID: "tt0086250"
imdbRating: "8.3"
imdbVotes: "650,872"*/

function formatMovieData(data){
     data=JSON.parse(data);
     //console.log(data);
     let htmlResp=`<div id="poster" class="poster"><img src="${data.Poster}"/></div>
     <ul>
     <li>Title: ${data.Title}</li>
     <li>Year: ${data.Year}</li>
     <li>Year: ${data.Rated}</li>
     <li>Director: ${data.Director}</li>
     <li>Actors: ${data.Actors}</li>
     <li>Revenue: ${data.BoxOffice}</li>
     <li>Plot: ${data.Plot}</li>
     </ul>`;
     
     console.log(htmlResp);

     document.getElementById('results').innerHTML=htmlResp;


}
