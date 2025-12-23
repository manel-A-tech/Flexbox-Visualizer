import ControlPanel from "./components/control panel/controlPanel.jsx"
import MainArea from "./components/main area/mainArea.jsx"
import FlexboxContext from "./components/context/flexboxContext.jsx"
import './app.css'

function App() {
  

  return (
    <>
    <h1 className="app-title">CSS Flexbox Simulator</h1>
    <div className="container">
       <FlexboxContext>
         <ControlPanel/>
         <div className="divider"></div>
         <MainArea/>
       </FlexboxContext>
    </div>
      
    </>
  )
}

export default App
