import { useContext } from 'react'
import {flexboxContext} from '../context/flexboxContext.jsx'
import './mainArea.css'

function MainArea (){
  const {flexDirection , flexWrap , justifyContent , alignItems , alignContent , gap } = useContext(flexboxContext)
  return(
    <>
    
    
      <div className="parent" style={{ 
        flexDirection: flexDirection,
        flexWrap : flexWrap ,
        justifyContent: justifyContent ,
        alignItems : alignItems,
        alignContent: alignContent ,
        gap: gap + "px"
      }}>
     <div className="item">1</div>
     <div className="item">2</div>
     <div className="item">3</div>
     </div> 

    </>
  )
}

export default MainArea