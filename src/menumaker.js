import React from "react";
import { api } from "../rest/api";
import { CreateNewCandle } from "./createnewcandle";
import { Candle } from "./candle";
import { Gif2 } from "./gif2";

export default class MenuMaker extends React.Component {
  state = {
    candles: [],
  };

  componentDidMount() {
    this.fetchCandles();
  }

  fetchCandles = async () => {
    const resources = await api.get();
    let candles = [];

    for (let resource of resources) {
      if (resource.name !== "About") {
        candles.push(resource);
      }
    }

    console.log(candles);

    this.setState({ candles });
  };

  updateCandle = async (updatedCandle, id) => {
    await api.put(updatedCandle, id);
    this.fetchCandles();
  };

  deleteCandle = async (id) => {
    await api.delete(id);
    this.fetchCandles();
  };

  render() {
    return (
      <div>
        <Gif2 />
        <CreateNewCandle fetchCandles={this.fetchCandles} />
        <div className="center-card">
          {this.state.candles.map((candle) => (
            <Candle
              key={candle.id}
              candle={candle}
              updateCandle={this.updateCandle}
              deleteCandle={this.deleteCandle}
            />
          ))}
        </div>
      </div>
    );
  }
}
