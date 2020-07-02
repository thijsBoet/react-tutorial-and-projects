import React from 'react';

import './Tour.scss';

export default class Tour extends React.Component {
  render() {
    const {id, city, img, name, info} = this.props.tour;
    const {removeTour} = this.props
    
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={city} />
          <span className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>info <span><i className="fas fa-caret-square-down"></i></span></h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}