import { useContext } from 'react'
import {flexboxContext} from '../context/flexboxContext.jsx'
import './controlPanel.css'

function ControlPanel (){
  const {setFlexDirection , setFlexWrap , setJustifyContent , setAlignItems , setAlignContent , setGap , gap , flexDirection , flexWrap , justifyContent , alignItems , alignContent  } = useContext(flexboxContext)

  const flexDirectionVals = ["row" , "column" , "row-reverse" , "column-reverse" ]
  const flexWrapVals = ["nowrap" , "wrap" , "wrap-revarse"]
  const justifyContentVals = ["flex-start" , "flex-end" , "center" , "space-between" , "space-around"]
  const alignItemsVals = ["flex-start" , "flex-end", "center" , "baseline" , "stretch"]
  const alignContentVals = ["flex-start" , "flex-end" , "center" , "space-between" , "space-around" , "stretch"]
  

   
  return(
    <>
    <div className='control-panel'>
      <div className="parent-props">
      <h2>
        Parent Properties
      </h2>
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
    </div>
    </>
  )
}

export default ControlPanel