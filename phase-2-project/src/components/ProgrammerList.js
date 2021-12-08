import Profile from "./Profiles"

function ProgrammerList({arrayToMap}) {
    
    
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
                        />
                    )
                }
            )
        }
                        
        
    </div>
    )
}

export default ProgrammerList


