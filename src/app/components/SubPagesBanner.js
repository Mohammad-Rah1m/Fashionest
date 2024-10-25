import React from 'react'

const SubPagesBanner = (props) => {
  return (
    <div className='mt-36 sm:mt-32 flex justify-center'>
      <div className='w-full sm:w-2/4 text-center'>
        <h1 className='text-4xl uppercase'>{props.title}</h1>
        <p className='mt-5 text-gray-500'>{props.description}</p>
      </div>
    </div>
  )
}

export default SubPagesBanner
