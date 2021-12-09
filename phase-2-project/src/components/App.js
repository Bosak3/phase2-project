import MainContainer from "./MainContainer";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        < MainContainer />
      </BrowserRouter>
    </div>
  )
}

export default App;





/* 

                              < App >

                          //Import Data?
                          < MainContainer >

                          //Needs State/router          //Needs State/router
  < PersonalProfile >     < ProgrammerList >          < Matches >

                              //Needs Data
                              < Profile >






*/