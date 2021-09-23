import "./App.css";
import BootstrapCard from "./BootstrapCard";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import CustomBootstrapCard from "./CustomBootstrapCard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailedCard from "./DetailedCard";



function makeCards(data: CustomBootstrapCard[]): JSX.Element[] {
  let resultHTML = [] as JSX.Element[];
  let lineCounter = 0;
  data.forEach((card) => {
    if (lineCounter >= 3) {
      lineCounter = 0;
      resultHTML.push(<br />);
    }
    lineCounter++;
    resultHTML.push( 
      <BootstrapCard
        img_src={card.img_src}
        title={card.title}
        text={card.text}
      />
    );
  });

  return resultHTML;
}

function App() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("http://localhost:3000/random")
      .then((response) => response.json())
      .then((result) => setData(result));
  }
  useEffect(() => getData(), []);

  return (
    <Router>
    <div
      style={{
        whiteSpace: "nowrap",
        justifyContent: "center",
        position: "relative",
      }}
      className="App"
    >
      <Switch>
        <Route exact path="/">
      {data &&
        makeCards(data).map((element) => {
          return element;
        })}
        </Route>
        <Route exact path="/detailed-card/:card">
          <DetailedCard/>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
