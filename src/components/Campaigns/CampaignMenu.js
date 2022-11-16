
import { Link} from "react-router-dom";
const CampaignMenu = (props) => {



const MenuGeneration = () => {
    if(props.campaigns.length === 0){

       return (<div>
       <p>No Campaigns</p>

     
       </div>
       )
    }

    return (
        <div>
        {props.campaigns.map((campaign) => (
            <div>
            <p>Name: {campaign.name}</p>
            <p>Description: {campaign.description}</p>
            </div>
            
        ))}
        </div>
    );
};

return (
    <div>
      
    {MenuGeneration()}
    <Link to="/Campaigns/Create"><button>Create a Campaign</button></Link>

    <Link to="/"><button>Close Menu</button></Link>
    </div>
);

};

export default CampaignMenu;