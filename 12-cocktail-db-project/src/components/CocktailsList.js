import React from "react";
import Cocktail from '../components/Cocktail';

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails found</h2>
  }
  
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(drink => {
          return <Cocktail key={drink.id} {...drink}/>
        })}
      </div>
    </section>
  );
}
