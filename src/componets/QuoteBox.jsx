import React from "react";
import quotes from "../quotes.json";

const QuoteBox = ({ aleatorio, color }) => {
  return (
    <div >
      <i className="fa-solid fa-quote-left"></i>
      <div  className="conte-name">
        <h2>{quotes[aleatorio].quote}</h2>
        <div className="title">
          <h1>{quotes[aleatorio].author}</h1>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
