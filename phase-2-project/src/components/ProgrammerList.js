import Profile from "./Profiles"

function ProgrammerList({mentorArrayToMap}) {

    return(
    <div>    
        <h1>ProgrammerList</h1>
        <Profile 
            name="Jon Doe"
            language="React"
            img="https://thumbs.dreamstime.com/z/cartoon-programmer-working-behind-computer-coder-to-sit-armchair-table-77862319.jpg"
        />
    </div>
    )
}

export default ProgrammerList