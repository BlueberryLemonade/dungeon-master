import { useState } from "react";
import CampaignCreator from "./CampaignCreator";
import { Link } from "react-router-dom";
const CampaignMenu = (props) => {

const[campaigns, setCampaigns] = useState(props.campaigns);

const newCampaign = () => {

    setCampaigns("1");
}
const MenuGeneration = () => {
    if(campaigns.length === 0){

       return (<div>
       <p>No Campaigns</p>

     
       <button onClick={newCampaign}>Create a Campaign</button>
       </div>
       )
    }
    return (
        <p>Campaign</p>
    );
};

return (
    <div>
    {MenuGeneration()}
    <Link to="/"><button>Close Menu</button></Link>
    </div>
);

};

export default CampaignMenu;