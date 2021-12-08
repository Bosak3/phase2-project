import PersonalProfile from "./PersonalProfile"
import ProgrammerList from "./ProgrammerList"
import Matches from "./Matches"
import mentors from "../data"



function MainContainer() {
    
    const mentorList = {mentors}
    console.log(mentorList)

    return (
        <div>
            <h1>MainContainer</h1>
            <PersonalProfile />
            <ProgrammerList />
            <Matches />
        </div>
    )
}

export default MainContainer