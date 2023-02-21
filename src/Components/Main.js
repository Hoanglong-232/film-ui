import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from './Card';

const Main = () => {
    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Popular</a>
                        </li>
                        <li>
                            <a href="#">Theatre</a>
                        </li>
                        <li>
                            <a href="#">Kids</a>
                        </li>
                        <li>
                            <a href="#">Drama</a>
                        </li>
                        <li>
                            <a href="#">Comdie</a>
                        </li>
                    </ul>
                </nav>
                <form>
                    <div className="search-btn"></div>
                    <input type="text" placeholder="Enter Moive Name" className="inputText"></input>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            <div className="container">
                <Card />
            </div>
        </>
    );
};

export default Main;
