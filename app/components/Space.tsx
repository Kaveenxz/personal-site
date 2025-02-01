import React from 'react'

function Space(props:any) {

  console.log(props.color)
  const bg:any = props.color
  return (
    <div className='w-full'>
      <div className={`w-screen pb-10 ${props.direction} ${props.color}`}>
      </div>
    </div>
  )
}

export default Space
