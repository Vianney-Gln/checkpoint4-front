import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/home.scss";
import Joke from "./Joke";
import { getAllFacts, deleteData } from "../services/facts";

//images
import imageChuck from "../images/chuck.png";

const Home = () => {
  //states globals variables
  const [facts, setFacts] = useState([]);
  const [oneFact, setOneFact] = useState({}); // send to Joke Component
  const [deleteMessage, setDeleteMessage] = useState("");
  const [operation, setOperation] = useState("");
  //useEffect
  useEffect(() => {
    getAllFacts().then((result) => {
      console.log(result.data);
      setFacts(result.data);
    });
  }, []);
  //function reinitialize operation state on click everywhere
  document.addEventListener("click", () => {
    setOperation("");
  });

  //function calling deleteData , redirect and send message if success or fail

  const runDeleteData = () => {
    deleteData(oneFact.id)
      .then(() => {
        setDeleteMessage(
          "fact supprimé avec succes, vous allez être redirigé à l'accueil"
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setDeleteMessage("erreur lors de la suppression du fact");
      });
  };

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
      width: "45%",
      height: "45%",
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
          <p className="one-joke">{oneFact.joke}</p>
          {operation !== "update" ? (
            <div className="container-image-chuck">
              <img src={imageChuck} alt="Chuck" title="Chuck te surveille..." />
            </div>
          ) : (
            <form>
              <label htmlFor="update-facts">
                <input
                  type="text"
                  name="update-facts"
                  id="update-facts"
                  placeholder="modifier le fact ici"
                />
              </label>
              <label htmlFor="select-category">
                <select name="select-category">
                  <option value={""}>--category--</option>
                  <option value={1}>pas drôle</option>
                  <option value={2}>très drôle</option>
                  <option value={3}>trash</option>
                  <option value={4}>les plus connues</option>
                </select>
              </label>
            </form>
          )}
          <p className="category-modal">
            <span>{oneFact.name}</span>
            <button
              type="button"
              className="update-button"
              onClick={() => {
                console.log("modifier");
                setOperation("update");
              }}
            >
              modifier
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={() => runDeleteData()}
            >
              supprimer
            </button>
          </p>
          {deleteMessage && (
            <p>
              <span>{deleteMessage}</span>
            </p>
          )}
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
              key={fact.id_joke}
              id_joke={fact.id_joke}
              joke={fact.joke}
              category={fact.name}
              setOneFact={setOneFact}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
