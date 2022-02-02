import React, { useState } from "react";
//styles
import "../styles/post.scss";

const Post = () => {
  //states globals variables
  const [id_category, setId_category] = useState(undefined);
  const [fact, setFact] = useState("");
  console.log(id_category);
  console.log(fact);
  return (
    <div className="container-post-form">
      <form>
        <label htmlFor="select-category">
          <select
            onChange={(e) => {
              setId_category(e.target.value);
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
                setFact(e.target.value);
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
