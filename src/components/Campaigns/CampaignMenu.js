import { useState } from "react";
import { Link } from "react-router-dom";
import CampaignCreator from "./CampaignCreator";

const CampaignMenu = (props) => {

const[campaigns, setCampaigns] = useState(props.campaigns);

const newCampaign = () => {

    setCampaigns("1");
}
<route></route>
const MenuGeneration = () => {
    if(campaigns.length === 0){

       return (<div>
       <p>No Campaigns</p>

       <Router>
        <Route exact path="src\components\Campaigns\CampaignMenu.js" component={CampaignCreator} />
       </Router>
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
    <button onClick={props.onClose}>Close Menu</button>
    </div>
);

};

export default CampaignMenu;