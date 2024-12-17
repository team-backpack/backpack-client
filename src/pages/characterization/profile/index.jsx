import "./styles.css";
import Back from "../../../components/characterization/back";

function Profile() {

  return (
    <div className="container large">
      <header>
        <Back page="/cultural"/>
      </header>
      <form>
        
        <div className="background-image">
          <input type="image"/>
        </div>
        <div className="profile-image">
          <input type="image"/>
        </div>

        <div className="form-control">
          <div className="input">
            <input placeholder="Nome de exibição" className="name-input"/>
          </div>
        </div>
        <div className="form-control">
          <div className="input">
            <input placeholder="Descrição" className="description-input" maxLength={255}/>
          </div>
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

export default Profile;
