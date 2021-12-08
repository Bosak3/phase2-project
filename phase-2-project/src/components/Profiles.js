
function Profiles(props){

    return(
        
        <div className="profile-card">
            <img src={props.img}/>
            <h2>{props.name}</h2>
            <h2>{props.language}</h2>
            <button>Button</button>
        </div>
        
        )
        
    }
        
export default Profiles


    


