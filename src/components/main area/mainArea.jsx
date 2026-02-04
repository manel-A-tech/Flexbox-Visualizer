import { useContext, useState } from 'react'
import {flexboxContext} from '../context/flexboxContext.jsx'
import './mainArea.css'

function MainArea (){
  const {flexDirection , flexWrap , justifyContent , alignItems , alignContent , gap , flexGrow ,setFlexGrow, flexShrink,setFlexShrink, alignSelf, setAlignSelf , height , setHeight, setWidth , width, nbrItems ,  selectedItems , setSelectedItems,  itemProperties, setItemProperties } = useContext(flexboxContext)

  
const defaultStyling = {
  height: 50,
  width: 50,
  alignSelf: 'auto',
  flexGrow: 0,
  flexShrink: 1
}

   const handleItemClick = (index, e) => {

    if (selectedItems.length > 0) {
     const updated = { ...itemProperties }

     selectedItems.forEach(i => {
      updated[i] = {
        height,
        width,
        alignSelf,
        flexGrow,
        flexShrink
      }
    })

    setItemProperties(updated)
  }

  
  let newSelection = []

  if (e.metaKey) {
    newSelection = selectedItems.includes(index)
      ? selectedItems.filter(i => i !== index)
      : [...selectedItems, index]
  } 
  else if (e.shiftKey && selectedItems.length > 0) {
  
    const last = selectedItems[selectedItems.length - 1]
    const start = Math.min(last, index)
    const end = Math.max(last, index)

    newSelection = []
    for (let i = start; i <= end; i++) {
      newSelection.push(i)
    }
  } 
  else {
   
    newSelection = [index]
  }

  setSelectedItems(newSelection)

  
  if (newSelection.length === 1) {
    const props = itemProperties[newSelection[0]] ?? defaultStyling

    setHeight(props.height)
    setWidth(props.width)
    setAlignSelf(props.alignSelf)
    setFlexGrow(props.flexGrow)
    setFlexShrink(props.flexShrink)
  }
}

  const getItemStyle = (index) => {
    if (selectedItems.includes(index)) {
      return {
        height: height + "px",
        width: width + "px",
        alignSelf: alignSelf,
        flexGrow: flexGrow,
        flexShrink: flexShrink
      }
    } else if (itemProperties[index]) {
      return itemProperties[index]
    } else {
      return {
        height: "50px",
        width: "50px",
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1
      }
    }
  }


  return(
      <div className='main-area-container'>
        <div className='axis-sprecification'>
          <span>Main Axis: {flexDirection === "row" ? "Horizontal →" : "Vertical ↓"}</span>
          <span>Cross Axis: {flexDirection === "row" ? "Vertical ↓" : "Horizontal →"}</span>
        </div>
        <div className="parent" style={{ 
        flexDirection: flexDirection,
        flexWrap : flexWrap ,
        justifyContent: justifyContent ,
        alignItems : alignItems,
        alignContent: alignContent ,
        gap: gap + "px"
      }}>
     
      {Array.from({length: nbrItems }).map((_, i)=>{
        const isSelected = selectedItems.includes(i)
        return(
          <div className={`item ${isSelected ? 'selectedItem' : ''}`}
           key={i}
            onClick={(e) => handleItemClick(i, e)}
            style={getItemStyle(i)}>
           Item {i + 1}
          </div>
        )      
})}    
     </div> 
      </div>
  )
}

export default MainArea