import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/home.scss";
import Joke from "./Joke";
import getAllFacts from "../services/facts";
const Home = () => {
  //states globals variables
  const [facts, setFacts] = useState([]);

  //useEffect
  useEffect(() => {
    getAllFacts().then((result) => {
      setFacts(result.data);
    });
  }, []);

  //Modal

  // state modal
  const [modalIsOpen, setIsOpen] = useState(false);

  // style Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "30%",
      height: "30%",
      color: "black",
      backgroundColor: "white",
    },
  };

  Modal.setAppElement("#root");

  // functions modal

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container-home">
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="confirmation Modal"
        >
          <div>
            <p>hhhh</p>
          </div>
        </Modal>
        <div className="container-text-welcome">
          <p className="text-welcome">
            Bienvenue dans le remake des Chuck Norris Facts! Un projet que j ai
            toujours voulu réaliser pour le fun, et qui mettra en pratique
            toutes les compétences apprises durant ces 5 mois de formation.{" "}
          </p>
        </div>

        {facts &&
          facts.map((fact) => (
            <Joke
              closeModal={closeModal}
              openModal={openModal}
              key={fact.id}
              fact={fact}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
