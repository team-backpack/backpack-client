import "./styles.css";

function Subject({subject}) {

  return (
    <div className="subject">
      <button>
        <div 
          className="picture"
          style={{ backgroundImage: `url(${ subject.pictureURL }})` }}
        ></div>
        <div className="name">
          <span className="name">{ subject.name }</span>
        </div>
      </button>
    </div>
  );
};

export default Subject;