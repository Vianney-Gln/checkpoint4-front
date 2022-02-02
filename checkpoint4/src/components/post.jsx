import React, { useState } from "react";
//styles
import "../styles/post.scss";

const Post = () => {
  //states globals variables
  const [infosFact, setInfosFact] = useState({});

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
  return (
    <div className="container-post-form">
      <form>
        <label htmlFor="select-category">
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
        <label htmlFor="facts">
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

        <button type="button">envoyer</button>
      </form>
    </div>
  );
};

export default Post;
