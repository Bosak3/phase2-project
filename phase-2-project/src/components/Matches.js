import Profiles from "./Profiles";

function Matches({arrayToMap, removeFromMatchesFunction, deleteRequest}){

    const removeFromMatches = ( mentorObj ) => {
        removeFromMatchesFunction( mentorObj )
    }

    return(
        <div className="matches">
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
        </div>
    )
    
}

export default Matches;