import { createContext,  useState } from "react"
export const flexboxContext = createContext()

function FlexboxContext ({children}){
   
  // parent flexbox properties / default values
  const [flexDirection , setFlexDirection] = useState("row")  //defines main axis
  const [flexWrap , setFlexWrap] = useState("nowrap") 
  const [justifyContent , setJustifyContent] = useState("flex-start") // main axis
  const [alignItems , setAlignItems] = useState("stretch") // cross axis
  const [alignContent , setAlignContent] = useState("stretch") // cross axis , only works when flexwrap is enabeled
  const [gap , setGap] = useState(0)



  // children flexbox properties / default values
  const [flexGrow , setFlexGrow] = useState(0) //how much an item grows compared to other items when there is extra space
  const [flexShrink , setFlexShrink] =useState(1) //how much an item shrinks compared to others when space is limited
  const [alignSelf , setAlignSelf] = useState('auto') //Overrides the container’s align-items value for a single item.

  const value = {
    flexDirection , setFlexDirection,
    flexWrap, setFlexWrap,
    justifyContent, setJustifyContent,
    alignItems, setAlignItems,
    alignContent, setAlignContent,
    gap,setGap,
    flexGrow ,  setFlexGrow,
    flexShrink , setFlexShrink ,
    alignSelf , setAlignSelf
  }

  return(
    <flexboxContext.Provider value = {value}  >
      {children}
    </flexboxContext.Provider>
  )
}

export default FlexboxContext