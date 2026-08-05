import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {controller} from 'react-hook-form'

function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>{label && <label className='inline-block mb-2 text-sm font-medium text-gray-700'>{label}</label>}
     <controller
     name={name|| "content"}
     control={control}
     render={({field:{onchange}})=>(
        <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor','searchreplace visualblocks code fullscreen','insertdatetime media table paste help wordcount' ],
              toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help', content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'

        }}
        onEditorChange={onchange}
        />
     )}
     />
     </div>
   
      
  
  )
}

export default RTE
