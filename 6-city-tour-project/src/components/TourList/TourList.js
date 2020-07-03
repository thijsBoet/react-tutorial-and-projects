import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import { tourData } from '../../tourData';

import './TourList.scss'

export default class TourList extends Component {
  state = {
    tours: tourData
  }
  removeTour = id => {
    const {tours} = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id)
    this.setState({
      tours: sortedTours
    })
  }                                 
  render() {
    const { tours } = this.state
    return (
      <section className="tourlist">
        {
          tours.map(tour => (
            <Tour 
              key={tour.id} 
              removeTour={this.removeTour} 
              tour={tour}>
            </Tour>
          ))
        }
      </section>      
    )
  }
}
