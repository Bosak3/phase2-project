import Profiles from "./Profiles";

function Matches({arrayToMap, removeFromMatchesFunction, deleteRequest}){

    const removeFromMatches = ( mentorObj ) => {
        removeFromMatchesFunction( mentorObj )
    }

    return(
        <div className="matches">
<<<<<<< HEAD
        <h1>Matches</h1>
    {
        arrayToMap.map(
            (matchObj) => {
            return(
                <Profiles 
                    key={matchObj.id}
                    mentorObj={matchObj}
                    clickFunction={removeFromMatches} 
                    deleteRequest={deleteRequest}//For Delete Fetch
                />
            )
        })
    }
=======
            <h1>Matches</h1>
            {
                arrayToMap.map(
                    (matchObj) => {
                        return(
                            <Profiles 
                                key={matchObj.id}
                                mentorObj={matchObj}
                                clickFunction={removeFromMatches} 
                                deleteRequest={deleteRequest}//For Delete Fetch
                            />
                        )
                })
            }
>>>>>>> a859980c18bc18700e2893c92d70dfdcfeb3f71c
        </div>
    )
    
}

export default Matches;