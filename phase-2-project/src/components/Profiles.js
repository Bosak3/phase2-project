
function Profiles({mentorObj, clickFunction, deleteRequest}){

    return(
        <div className="profile-card" >
            <div>
            
                <img src={mentorObj.image} alt="programmer mentor"/>
                <h2>{mentorObj.name}</h2>
                <h2>{mentorObj.language}</h2>
            </div>
            
            <button className= "button" 
                onClick={ ( ) => { clickFunction(mentorObj) } }>
            
            Add
                
            </button>

            <button className="button" >Remove</button>
        
        </div>
        )
        
    }
        
export default Profiles

//For Delete Fetch
// onClick={() => { deleteRequest( mentorObj.id ) }}