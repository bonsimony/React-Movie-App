import PropTypes from "prop-types";     //prop-types를 사용하기 위해서는 터미널에서 npm i prop-types를 실행해야 한다!
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return(  
        <div>
            <div>
                <img src = {coverImg} alt={title}/>
                <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
                <p>{summary}</p>
                <ul>
                {genres.map((g) => 
                    (<li>{g}</li>)
                    )}
                </ul>
            </div>
        </div>
  );
};

Movie.prototype = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;