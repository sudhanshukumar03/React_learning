import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        ref={ref}
        className={`${className} mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;

//forward reference definition is used to pass a ref from a parent component to a child component. It allows the parent component to access the child component's DOM node or instance. In this case, the Input component is defined using forwardRef, which means that it can accept a ref prop and pass it down to the underlying input element. This allows the parent component to directly manipulate the input element if needed. 