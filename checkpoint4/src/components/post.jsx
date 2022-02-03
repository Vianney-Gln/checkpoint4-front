import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//styles
import "../styles/post.scss";
//services
import { postData } from "../services/facts";

const Post = () => {
  //states globals variables
  const [infosFact, setInfosFact] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  //useNavigate
  const navigate = useNavigate();

  /**
   *function getting datas from the form
   * @param {string || number} value
   * @param {string} key
   */
  const getInfos = (value, key) => {
    const newInfos = infosFact;
    newInfos[key] = value;
    setInfosFact(newInfos);
  };

  //function running the posData function, setMessage succes or fail, and redirect if success
  const post = () => {
    postData(infosFact)
      .then(() => {
        setSuccessMessage(
          "Chuck Norris facts envoyée!, vous serez redirigé à l'accueil"
        );
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch(() => {
        setSuccessMessage("Il y a eu une erreur lors de l'envois...");
      });
  };
  return (
    <>
      <div className="container-post-form">
        <form>
          <label className="label-textarea" htmlFor="facts">
            <textarea
              onChange={(e) => {
                setTimeout(() => {
                  getInfos(e.target.value, "joke");
                }, 1000);
              }}
              name="facts"
              id="facts"
              placeholder="écrivez une joke sur Chuck Norris ici"
            />
          </label>
          <div className="container-select-button">
            <div className="select-button">
              <label className="label-select" htmlFor="select-category">
                <select
                  onChange={(e) => {
                    getInfos(e.target.value, "id_category");
                  }}
                  name="select-category"
                >
                  <option value={""}>--category--</option>
                  <option value={1}>pas drôle</option>
                  <option value={2}>très drôle</option>
                  <option value={3}>trash</option>
                  <option value={4}>les plus connues</option>
                </select>
              </label>

              <button onClick={() => post()} type="button">
                envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
      {successMessage && <p>{successMessage}</p>}
    </>
  );
};

export default Post;
