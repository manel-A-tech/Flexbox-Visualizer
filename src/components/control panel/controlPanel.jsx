import { useContext, useState } from 'react'
import {flexboxContext} from '../context/flexboxContext.jsx'
import './controlPanel.css'

function ControlPanel (){
  const {setFlexDirection , setFlexWrap , setJustifyContent , setAlignItems , setAlignContent , setGap , gap , flexDirection , flexWrap , justifyContent , alignItems , alignContent  } = useContext(flexboxContext)

  const flexDirectionVals = ["row" , "column" , "row-reverse" , "column-reverse" ]
  const flexWrapVals = ["nowrap" , "wrap" , "wrap-revarse"]
  const justifyContentVals = ["flex-start" , "flex-end" , "center" , "space-between" , "space-around"]
  const alignItemsVals = ["flex-start" , "flex-end", "center" , "baseline" , "stretch"]
  const alignContentVals = ["flex-start" , "flex-end" , "center" , "space-between" , "space-around" , "stretch"]
  
  const [showCode , setShowCode] =useState(false)
  const [btnContent , setBtnContent] = useState("Show Code")

  const handleReset = ()=>{
    setFlexDirection('row')
    setFlexWrap('nowrap')
    setJustifyContent('flex-start')
    setAlignItems('stretch')
    setAlignContent('stretch')
    setGap(0)
  }

  const handleShowCode = ()=>{
     if(showCode === false && btnContent === "Show Code"){
      setShowCode(true)
      setBtnContent("Hide Code")
     }else{
      setShowCode(false)
      setBtnContent('Show Code')
     }
  }

   
  return(
    <>
    <div className='control-panel'>
      <div className="control-panel-header">
        <h2>
        Parent Properties
      </h2>
      <div className="control-btns">
        <button onClick={(e)=>handleShowCode()}> {btnContent} </button>
        <button onClick={(e)=>handleReset()}>Reset</button>
      </div>
      </div>
      <div className="parent-props">
      <div className="prop-grp">
        <label>Flex Direction</label>
        {flexDirectionVals.map((flexDirVal)=>(
            <span className= {`prop-vals ${flexDirection === flexDirVal ? "selected" : ""}`}  key={flexDirVal} onClick={(e)=>setFlexDirection(flexDirVal)}> {flexDirVal} </span>
        ))}
      </div>
      <div className="prop-grp">
        <label>Flex Wrap</label>
        {flexWrapVals.map((flexWrapVal)=>(
          <span className= {`prop-vals ${flexWrap === flexWrapVal ? "selected" : ""}`} key={flexWrapVal} onClick={(e)=>setFlexWrap(flexWrapVal)}> {flexWrapVal} </span>
        ))}
      </div>
      <div className="prop-grp">
        <label>Justify Content</label>
        {justifyContentVals.map((justifyContentVal)=>(
          <span className= {`prop-vals ${justifyContent === justifyContentVal ? "selected" : ""}`} key={justifyContentVal} onClick={(e)=>setJustifyContent(justifyContentVal)}> {justifyContentVal} </span>
        ))}
      </div>
      <div className="prop-grp">
        <label>Align Items</label>
        {alignItemsVals.map((alignItemsVal)=>(
          <span  className= {`prop-vals ${alignItems === alignItemsVal ? "selected" : ""}`} key={alignItemsVal} onClick={(e)=>setAlignItems(alignItemsVal)}> {alignItemsVal} </span>
        ))}
      </div>
      <div className="prop-grp">
        <label>Align Content</label>
        {alignContentVals.map((alignContentVal)=>(
          <span className= {`prop-vals ${alignContent === alignContentVal ? "selected" : ""}`} key={alignContentVal} onClick={(e)=>setAlignContent(alignContentVal)}> {alignContentVal} </span>
        ))}
      </div>
      <div className="prop-grp">
        <label>Gap</label>
        <input type="number"  value={gap} onChange={(e)=>setGap(e.target.value)} />
      </div>
      </div>
      {
        showCode ? (
          <div className='generated-css'>
            <span id='parent'>Parent:</span>
            <div className='css-code'>
              <span>display: flex;</span>
              <span>flex-direction: {flexDirection};</span>
              <span>flex-wrap: {flexWrap}; </span>
              <span>justify-content: {justifyContent};</span>
              <span>align-items: {alignItems};</span>
              <span>align-content: {alignContent}; </span>
              <span>gap: {gap}px;</span>
            </div>
          </div>
        ):(
          <div></div>
        )
      }
    </div>
    </>
  )
}

export default ControlPanel