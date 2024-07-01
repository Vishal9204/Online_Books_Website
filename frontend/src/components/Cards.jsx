import React from 'react';

function Cards(props) {
    return (
        <div className="card-container">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className="card-figure">
                    <img
                        src={props.Img}
                        alt={props.Name}
                        className="card-image"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.Name}</h2>
                    <p className="card-text">{props.Title}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
