import ControlPanel from "./components/control panel/controlPanel.jsx"
import MainArea from "./components/main area/mainArea.jsx"
import FlexboxContext from "./components/context/flexboxContext.jsx"

function App() {
  

  return (
    <>
      <FlexboxContext>
        <ControlPanel/>
        <MainArea/>
      </FlexboxContext>
    </>
  )
}

export default App
