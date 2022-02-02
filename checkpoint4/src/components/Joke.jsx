import "../styles/joke.scss";
const Joke = ({ fact }) => {
  return (
    <div className="container-joke">
      <p>
        <span className="category">categorie:{fact.name}</span>
        {fact.joke}
      </p>
    </div>
  );
};

export default Joke;
