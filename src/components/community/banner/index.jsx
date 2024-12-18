import { useRef, useEffect } from "react";
import "./style.css";

function Banner({ community }) {

    const popupRef = useRef(null);
    const bannerImageRef = useRef(null);
  
    useEffect(() => {
      const bannerImage = bannerImageRef.current;
      const popup = popupRef.current;
  
      if (bannerImage && popup) {
        // Evento para abrir o popup
        bannerImage.onclick = () => {
          popup.style.display = "block";
          popup.querySelector("img").src = bannerImage.getAttribute("src");
        };
  
        // Evento para fechar o popup
        popup.onclick = () => {
          popup.style.display = "none";
        };
      }
  
      // Cleanup
      return () => {
        if (bannerImage) bannerImage.onclick = null;
        if (popup) popup.onclick = null;
      };
    }, []); // Executa apenas na montagem

    return (
        <div>
          <div className="banner-head">
            <div className="imgbox">
                <img ref={bannerImageRef} src={community.banner} alt="banner" />
            </div>

            <div className="text-container">
                    <h1 className="display-name">{community.displayname}</h1>
                    <h2 className="name">{community.name}</h2> 
            </div>

            <div className="follow">
            <button>Participar</button>
            </div>

          </div>
    
          <div ref={popupRef} className="banner-popup">
            <span>&times;</span>
            <img alt="" />
          </div>
        </div>
      );
    }
  
  
  Banner.defaultProps = {
    community: {
      banner: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayname: "New Community",
      name: "@new.community",
      members: 0,
    },
  };
  
  export default Banner;
  