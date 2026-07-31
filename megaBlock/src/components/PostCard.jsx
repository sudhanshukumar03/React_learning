import React from 'react'
import Service from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({
    $id,
    title,
    featureImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-centre mb-4'>
                <img src={Service.getFilePreview(featureImage)} alt={title} classNa me='rounded-xl' />
            </div>
            <h2 className='text-lg font-bold'>{title}</h2>

        </div>

    </Link>
  )
}

export default PostCard
