import "./style.css";
import { format } from 'date-fns';

function Infobar({ community }) {
  const formattedDate = format(new Date(community.creation), 'dd/MM/yyyy');

  return (
    <div className="infobar">

      <div className="infobar-details">
        <div className="flag-container">
          <img src={community.flag} alt={`${community.nationality} flag`} className="flag-img" />
          <p className="community-nationality">{community.nationality}</p>
        </div>

        <div className="text-info">
          <p className="community-name">{community.name}</p>
          <p className="community-creation">Created on: {formattedDate}</p>
          <hr></hr>
          <p className="community-description">{community.description}</p>
          <hr></hr>
          <p className="community-members">Members: {community.members}</p>
        </div>
      </div>
    </div>
  );
}
Infobar.defaultProps = {
  community: {
    nationality: "Brasil",
    flag: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg/@@images/image",
    banner: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayname: "New Community",
    name: "@new.community",
    creation: new Date(),  // Defina a data aqui, sem formatação
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus eos accusamus ex incidunt soluta, alias ipsum molestias aut fugit eum asperiores non suscipit quis officiis a iste deserunt?",
    members: 1,
  },
};

export default Infobar;