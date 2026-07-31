import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>}
      <select {...props} id={id} ref={ref} className={`${className} mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)


//<option> is a child component of <select> and
//  represents a single option in the dropdown list. 
// The value attribute of <option> specifies the value 
// that will be sent to the server when the form is 
// submitted, while the content between the opening 
// and closing <option> tags is what will be displayed 
// to the user in the dropdown list. In this case, we are 
// using the map() method to iterate over the options 
// array and create an <option> element for each
//  option object, with the value and label properties 
// being used to set the value and display text respectively.