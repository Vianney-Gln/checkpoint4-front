import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/home.scss";
import Joke from "./Joke";
import { getAllFacts, deleteData, updateData } from "../services/facts";

//images
import imageChuck from "../images/chuck.png";

const Home = () => {
  //states globals variables
  const [facts, setFacts] = useState([]);
  const [oneFact, setOneFact] = useState({}); // send to Joke Component
  const [deleteMessage, setDeleteMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [operation, setOperation] = useState("");
  const [infosUpdate, setInfosUpdate] = useState({});
  const [nameCategory, setNameCategory] = useState("");

  //useEffect
  useEffect(() => {
    getAllFacts(nameCategory).then((result) => {
      setFacts(result.data);
    });
  }, [nameCategory]);

  //function running updateData,redirect and send message if success or not
  const runUpdateData = () => {
    updateData(infosUpdate, oneFact.id)
      .then(() => {
        setUpdateMessage(
          "fact modifié avec succès, vous serez redirigé vers l'accueil."
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })

      .catch((err) => {
        console.log(err);
        setUpdateMessage("vérifiez vos champs");
      });
  };

  /**
   * function getting data from form for updating
   * @param {number || string} value
   * @param {string} key
   */
  const getInfosUpdate = (value, key) => {
    const newInfos = infosUpdate;
    newInfos[key] = value;
    setInfosUpdate(newInfos);
  };

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
      width: "55%",
      height: "55%",
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
            <form className="update-form">
              <label htmlFor="update-facts">
                <input
                  onChange={(e) => getInfosUpdate(e.target.value, "joke")}
                  type="text"
                  name="update-facts"
                  id="update-facts"
                  placeholder="modifier le fact ici"
                />
              </label>
              <label htmlFor="select-category">
                <select
                  onChange={(e) =>
                    getInfosUpdate(e.target.value, "id_category")
                  }
                  name="select-category"
                >
                  <option value={""}>--category--</option>
                  <option value={1}>pas drôle</option>
                  <option value={2}>très drôle</option>
                  <option value={3}>trash</option>
                  <option value={4}>les plus connues</option>
                </select>
              </label>
              <button
                type="button"
                onClick={() => runUpdateData()}
                className="validate-update"
              >
                Valider
              </button>
              <button
                onClick={() => setOperation("")}
                className="escape-update"
              >
                X
              </button>
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
          {updateMessage && (
            <p>
              <span>{updateMessage}</span>
            </p>
          )}
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
          <div className="filtres">
            <button
              value={"pas drole"}
              onClick={(e) => setNameCategory(e.target.value)}
              type="button"
            >
              pas drole
            </button>
            <button
              value={"très drole"}
              onClick={(e) => setNameCategory(e.target.value)}
              type="button"
            >
              très drole
            </button>
            <button
              value={"trash"}
              onClick={(e) => setNameCategory(e.target.value)}
              type="button"
            >
              trash
            </button>
            <button
              value={"les plus connues"}
              onClick={(e) => setNameCategory(e.target.value)}
              type="button"
            >
              les plus connues
            </button>
            <button
              type="button"
              value={""}
              onClick={(e) => setNameCategory(e.target.value)}
            >
              enlever le filtre
            </button>
          </div>
        </div>
        <div className="list-facts">
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
      </div>
    </>
  );
};

export default Home;
