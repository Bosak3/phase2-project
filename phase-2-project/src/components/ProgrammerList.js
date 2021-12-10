import Profile from "./Profiles";
import React from 'react';
import PostForm from "./PostForm";

function ProgrammerList({arrayToMap, addToMatches, deleteRequest }) {
    
    
    const forAddToMatches = ( objToAdd ) => {
        addToMatches( objToAdd ) 

    }
    
    return(
        <div className="programmer-list">    
        <PostForm 
        arrayToPOST={arrayToMap} />
            <h1>ProgrammerList</h1>
            {
                arrayToMap.map(
                    
                    (eachMentor) => {
                        return(
                            
                            <Profile 
                                key={eachMentor.id}
                                mentorObj={eachMentor}
                                clickFunction={forAddToMatches}
                                deleteRequest={deleteRequest}//For Delete Fetch
                                
                            />
                        )
                    })
            }  
        
        </div>
    )
}

export default ProgrammerList;