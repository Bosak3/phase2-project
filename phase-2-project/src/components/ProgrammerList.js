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

            })

        }
        
    </div>
    )
}

export default ProgrammerList

// <Profile 
//     name="Jon Doe"
//     language="React"
//     img="https://thumbs.dreamstime.com/z/cartoon-programmer-working-behind-computer-coder-to-sit-armchair-table-77862319.jpg"
// /> 


