import React from "react";
import { api } from "../rest/api";

import { Card } from "react-bootstrap";

export const CreateNewCandle = (props) => {
  const { fetchCandles } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("create-candle").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;

    api.create({ name: name, description: description, price: price });
    fetchCandles();

    document.getElementById("create-candle").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "$0";
  };

  return (
    <Card className="card">
      <Card.Header>Create a New Candle</Card.Header>
      <Card.Body>
        <form className="form-control card" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="New Candle Name"
            id="create-candle"
          ></input>
          <input type="text" placeholder="Description" id="description"></input>
          <input type="text" placeholder="$0" id="price"></input>
          <button type="submit" className="btn btn-primary">
            Create Candle
          </button>
        </form>
      </Card.Body>
    </Card>
  );
};
