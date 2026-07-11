import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
 return (
   <div className="bg-gray-600 flex justify-center py-4">
  <h1 className="text-4xl font-bold">
        User: {userid}
      </h1>
    </div>
  );
}

export default User
