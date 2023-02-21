import React from 'react';

const Card = () => {
    return (
        <>
            <div className="movie"></div>
            <img src="img/poster.jpg" className="poster"></img>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">Movie Title</h4>
                    <p className="rating">9.7</p>
                </div>
                <div className="overview">
                    <h1>overview</h1>
                    Vì dòng này dài quá lên mình lười gõ nhé mọi người và cũng không copy được!!
                </div>
            </div>
        </>
    );
};

export default Card;
