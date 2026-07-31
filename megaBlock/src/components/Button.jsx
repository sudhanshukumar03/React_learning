import React, { Children } from 'react'

function Button({
    Children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    classN
}) {
    
  return (
   <button className={`px-4 py-2 ${bgColor} ${textColor} rounded-full`}{...props}>
    {Children}
   </button>
  )
}

export default Button

//forward reference definition is used to pass a ref from a parent component to a child component. It allows the parent component to access the child component's DOM node or instance. In this case, the Button component is defined using forwardRef, which means that it can accept a ref prop and pass it down to the underlying button element. This allows the parent component to directly manipulate the button element if needed.
