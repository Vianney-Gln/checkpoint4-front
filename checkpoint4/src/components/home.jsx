import "../styles/home.scss";
import Joke from "./Joke";
const Home = () => {
  return (
    <div className="container-home">
      <div className="container-text-welcome">
        <p className="text-welcome">
          Bienvenue dans le remake des Chuck Norris Facts! Un projet que j ai
          toujours voulu réaliser pour le fun, et qui mettra en pratique toutes
          les compétences apprises durant ces 5 mois de formation.{" "}
        </p>
      </div>

      <Joke />
    </div>
  );
};

export default Home;
