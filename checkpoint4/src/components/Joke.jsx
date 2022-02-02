import "../styles/joke.scss";
const Joke = ({ fact, openModal }) => {
  return (
    <div className="container-joke">
      <p
        onClick={() => {
          openModal();
          console.log("modal");
        }}
      >
        <span className="category">categorie:{fact.name}</span>
        {fact.joke}
      </p>
    </div>
  );
};

export default Joke;
