import Die from "./Die";

const Dicebag = () => {

    return(
        <div>
            <Die sides="6"/>
            <Die sides="8"/>
            <Die sides="10"/>
            <Die sides="20"/>
            <Die sides="100"/>
        </div>
    );
        
    
};

export default Dicebag;