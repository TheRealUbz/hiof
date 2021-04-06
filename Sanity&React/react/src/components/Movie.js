const Movie = ({ name, actor }) => (
    <div class="movieDiv">
        <p class="movieName">Movie: {name}</p>  
        <p class="actorName">Actor: {actor}</p>
        {/* <img src={imageUrl} class="movieImg" alt="Movie"></img> */}
    </div>
);

export default Movie;