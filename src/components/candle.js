import React from "react";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import CandlePic from "../img/scent ideas.jpeg";

export const Candle = (props) => {
  const { candle, updateCandle, deleteCandle } = props;

  const editClick = (e) => {
    e.preventDefault();

    const name = document.getElementById("edit-name").value;
    const description = document.getElementById("edit-description").value;
    const price = document.getElementById("edit-price").value;

    let nameToUse = "";
    let descriptionToUse = "";
    let priceToUse = "";

    name !== "" && name !== candle.name
      ? (nameToUse = name)
      : (nameToUse = candle.name);
    description !== "" && description !== candle.description
      ? (descriptionToUse = description)
      : (descriptionToUse = candle.description);
    price !== "" && price !== candle.price
      ? (priceToUse = price)
      : (priceToUse = candle.price);

    updateCandle(
      { name: nameToUse, description: descriptionToUse, price: priceToUse },
      candle.id
    );
  };

  const deleteClick = (e) => {
    deleteCandle(candle.id);
  };

  return (
    <Card className="headerImage card">
      <Card.Header>{candle.name}</Card.Header>
      <Card.Body>
        <div className="center">
          <Card.Img
            variant="top"
            src={CandlePic}
            alt="A picture of a custom candle."
            className="headerImage"
          ></Card.Img>
        </div>
        <Card.Subtitle>Description</Card.Subtitle>
        <Card.Text>{candle.description}</Card.Text>
        <Card.Subtitle>{candle.price}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <input
          type="text"
          placeholder="Edit Candle Name"
          id="edit-name"
        ></input>
        <input
          type="text"
          placeholder="Edit Description"
          id="edit-description"
        ></input>
        <input type="text" placeholder="$0" id="edit-price"></input>
        <br />
        <Button variant="warning" onClick={editClick}>
          Submit Candle Edits
        </Button>
        <Button variant="danger" onClick={deleteClick}>
          Delete Candle
        </Button>
      </Card.Footer>
    </Card>
  );
};
