import "./styles.css";
import Suggestion from "../../../components/characterization/suggestion";
import Back from "../../../components/characterization/back";

function Suggestions() {
  const profile = {};

  return (
    <div className="container large">
      <header>
        <Back page="/cultural"/>
      </header>
      <div className="title">
        <h1>Contas que você pode gostar</h1>
      </div>

      <form>
        <div className="sugestions">
          <Suggestion profile={profile} />
        </div>

        <div className="form-control">
          <button type="submit" className="blue">
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Suggestions;
