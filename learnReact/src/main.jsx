import React from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
//import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custome APP</h1>
    </div>
  )
  
}
/*
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
    */

/*const anotherElement =
<a href= "https://google.com" target:'_blank'>visit google</a>
*/
const evaluatedExp = "chai aur code"

const reactElement = React.createElement(
  'a',//parameter tag
  {href:'https://google.com',target:'_blank'} ,//object use to set property
  'click me to visit google',
  evaluatedExp

)

createRoot(document.getElementById('root'))
.render(
 
    //<MyApp />
    //MyApp()
    //anotherElement
    reactElement
 
)
