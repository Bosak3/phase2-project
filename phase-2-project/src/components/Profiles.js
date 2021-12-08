
function Profiles({mentorObj, clickFunction}){

    return(
        <div className="profile-card" >
            <div onClick= {() => {
                clickFunction(mentorObj)
            }}>
                <img src={mentorObj.image} alt="programmer mentor"/>
                <h2>{mentorObj.name}</h2>
                <h2>{mentorObj.language}</h2>
            </div>
            <button className= "button" onClick={() => {console.log("CLICK BUTTON")}}>Button</button>
        </div>
        )
        
    }
        
export default Profiles