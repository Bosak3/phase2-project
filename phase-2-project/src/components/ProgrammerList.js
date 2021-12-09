import Profile from "./Profiles"


function ProgrammerList({arrayToMap, addToMatches, deleteRequest }) {
    
    
    const forAddToMatches = ( objToAdd ) => {
        addToMatches( objToAdd ) 

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
                                clickFunction={forAddToMatches}
                                // deleteRequest={deleteRequest}//For Delete Fetch
                                
                            />
                        )
                    })
            }  
        
        </div>
    )
}

export default ProgrammerList


