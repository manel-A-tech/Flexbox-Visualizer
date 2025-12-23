import { createContext,  useState } from "react"
export const flexboxContext = createContext()

function FlexboxContext ({children}){
   
  // parents flexbox properties / default values
  const [flexDirection , setFlexDirection] = useState("row")  //defines main axis
  const [flexWrap , setFlexWrap] = useState("nowrap") 
  const [justifyContetnt , setJustifyContent] = useState("flex-start") // main axis
  const [alignItems , setAlignItems] = useState("stretch") // cross axis
  const [alignContent , setAlignContent] = useState("stretch") // cross axis , only works when flexwrap is enabeled
  const [gap , setGap] = useState(0)

  

  const value = {
    flexDirection , 
    setFlexDirection,
    flexWrap,
    setFlexWrap,
    justifyContetnt,
    setJustifyContent,
    alignItems,
    setAlignItems,
    alignContent,
    setAlignContent,
    gap,
    setGap
  }

  return(
    <flexboxContext.Provider value = {value}  >
      {children}
    </flexboxContext.Provider>
  )
}

export default FlexboxContext