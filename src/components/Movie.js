import PropTypes from "prop-types";     //prop-types를 사용하기 위해서는 터미널에서 npm i prop-types를 실행해야 한다!
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}){
    return(  
        <div>
            <div className={styles.movie}>
                <img src={coverImg} alt={title} className={styles.movie__img} />
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
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