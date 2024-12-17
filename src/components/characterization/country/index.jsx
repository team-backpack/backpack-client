import "./styles.css";

function Country({ country }){

    return(
        <div className="country">
            <div 
                className="flag"
                style={{ backgroundImage: `url(${ country.flag }})` }}
            ></div>
            <div className="name">
                <span className="country-name" >{ country.name }</span>
            </div>
        </div>
    );
};

export default Country;