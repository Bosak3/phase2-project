import Profile from "./Profiles"


function ProgrammerList({arrayToMap, addMentorMatches}) {
    
    const addToMatches = (clickedMentor) => {
        addMentorMatches(clickedMentor)
    }
    
    return(
    <div>    
        <h1>ProgrammerList</h1>
        {
            arrayToMap.map(
                
                (eachMentor) => {
                    return(
                        
                        <Profile 
                            key={eachMentor.id}
                            mentorObj={eachMentor}
                            clickFunction ={addToMatches}
                        />
                        )}
        )}  
    </div>
    )
}

export default ProgrammerList


