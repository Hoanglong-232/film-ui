import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import react, { useEffect, useState } from 'react';
import Card from './Card';

let API_key = '&api_key=663c2d1726c0c207cde5bd6924dc1dac';
let base_url = 'https://api.themoviedb.org/3';
let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_key;
let arr = ['Popular', 'Horror', 'Kids', 'Drama', 'Comendy'];

const Main = () => {
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);

    useEffect(() => {
        fetch(url_set)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setData(data.results);
            });
    }, [url_set]);

    const getData = (movieType) => {
        if (movieType == 'Popular') {
            url = base_url + '/discover/movie?sort_by=popularity.desc' + API_key;
        }
        if (movieType == 'Horror') {
            url =
                base_url +
                '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' +
                API_key;
        }
        if (movieType == 'Kids') {
            url = base_url + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc' + API_key;
        }
        if (movieType == 'Drama') {
            url = base_url + '/discover/movie?with_genres=18&primary_release_year=2014' + API_key;
        }
        if (movieType == 'Comendy') {
            url = base_url + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc' + API_key;
        }
        setUrl(url);
    };

    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        {arr.map((value) => {
                            return (
                                <li>
                                    <a
                                        href="#"
                                        name={value}
                                        onClick={(e) => {
                                            getData(e.target.name);
                                        }}
                                    >
                                        {value}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" className="inputText"></input>

                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form>
            </div>

            <div className="container">
                {movieData.length == 0 ? (
                    <p className="notfound">NOT FOUND</p>
                ) : (
                    movieData.map((res, pos) => {
                        return <Card info={res} key={pos} />;
                    })
                )}
            </div>
        </>
    );
};

export default Main;
