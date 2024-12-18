import Banner from "../../components/community/banner";
import NavigationBar from "../../components/navbar";
import Infobar from "../../components/community/infobar"
import Feed from "../feed"
import "./styles.css"; // Certifique-se de ter o arquivo CSS correto

function Community() {
    return (
        <div className="container large">
            <NavigationBar />
            <div className="divider"></div>
            <div>
                <Banner />
                <Feed />
            </div>
            <div className="divider"></div>
            <Infobar />

    </div>
    );
}

export default Community;