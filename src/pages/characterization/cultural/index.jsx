import "./styles.css";

function Cultural() {

  return (
    <div className="container large">
      <header>
        <Back page="/home"/>{/*go to home page, not to feed*/}
      </header>
      <div className="title">
        <h1>Diga-nos mais sobre você</h1>
      </div>
      <main>
        <div className="input-title">
          <h4>De onde você vem?</h4>
        </div>
        <form>
          <div className="form-control">
            <label>País</label>
            <div className="input">
              <input placeholder="" list="countries"/>
              <datalist id="countries">
                {/*TODO: implements all contries in that list*/}
                <option value=""/>
              </datalist>
            </div>
          </div>
          <div className="form-control">
            <label>Região</label>
            <div className="input">
              <input placeholder="" list="regions"/>
              <datalist id="countries">
                {/*TODO: implements all regions in that list*/}
                <option value=""/>
              </datalist>
            </div>
          </div>
          <div className="form-control">
            <label>Cidade</label>
            <div className="input">
              <input placeholder="" list="citys"/>
              <datalist id="countries">
                {/*TODO: implements all citys in that list*/}
                <option value=""/>
              </datalist>
            </div>
          </div>

          <div className="input-title">
            <h4>Quais linguas você fala??</h4>
          </div>
          <div className="form-control">
            <label className="linguage-name"></label>
            <div className="input">
              <input placeholder="escolher" list="linguages"/>
              <datalist id="linguages">
                {/*TODO: implements all linguages in that list*/}
                <option value=""/>
              </datalist>
            </div>
          </div>

          <div className="form-control">
            <button type="submit" className="blue">
              Próximo
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Cultural;
