import "../styles/joke.scss";
import { getOneFact } from "../services/facts";
const Joke = ({ joke, id_joke, category, openModal, setOneFact }) => {
  return (
    <div className="container-joke">
      <p
        onClick={() => {
          getOneFact(id_joke).then((result) => {
            console.log(result.data);
            setOneFact(result.data);
          });
          openModal();
        }}
      >
        <span className="category">categorie:{category}</span>

        {joke}
      </p>
    </div>
  );
};

export default Joke;
