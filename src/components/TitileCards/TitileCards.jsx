import React, { useEffect, useRef } from "react";
import "./TitileCards.css";
import cards_data from "../../assets/cards/Cards_data";



const TitileCards = ({titile, category}) => {


  const cardsRef = useRef();

const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(() =>{
  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className="titile-cards">
      <h2>{titile?titile: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>;
          
        })}
      </div>
    </div>
  );
};

export default TitileCards;
