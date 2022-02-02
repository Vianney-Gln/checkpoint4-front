import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import Joke from "./Joke";
import getAllFacts from "../services/facts";
const Home = () => {
  //states variables
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    getAllFacts().then((result) => {
      setFacts(result.data);
    });
  }, []);

  return (
    <div className="container-home">
      <div className="container-text-welcome">
        <p className="text-welcome">
          Bienvenue dans le remake des Chuck Norris Facts! Un projet que j ai
          toujours voulu réaliser pour le fun, et qui mettra en pratique toutes
          les compétences apprises durant ces 5 mois de formation.{" "}
        </p>
      </div>

      {facts && facts.map((fact) => <Joke key={fact.id} fact={fact} />)}
    </div>
  );
};

export default Home;
