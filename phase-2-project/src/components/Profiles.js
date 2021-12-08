
function Profiles(props){

    return(
        
        <div className="profile-card">
            <img src={props.img} alt="programmer mentor"/>
            <h2>{props.name}</h2>
            <h2>{props.language}</h2>
            <button className= "button">Button</button>
        </div>
        
        )
        
    }
        
export default Profiles


    


