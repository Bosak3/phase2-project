
function Profiles({mentorObj, clickFunction, deleteRequest}){

    return(
        <div className="profile-card" >
            <div>
            
                <img src={mentorObj.image} alt="programmer mentor"/>
                <h2>{mentorObj.name}</h2>
                <h2>{mentorObj.language}</h2>
                <h2>{mentorObj.location}</h2>
            </div>
            
            <button className= "button" 
                onClick={ ( ) => { clickFunction(mentorObj) } }>
            
            Add
                
            </button>

            <button className="button" 
            onClick={() => { 
                deleteRequest( mentorObj.id ) 
            }}
            >Remove</button>
        
        </div>
        )
        
    }
        
export default Profiles