import { useState } from "react";

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
    <button onClick={props.onClose}>Close Menu</button>
    </div>
);

};

export default CampaignMenu;