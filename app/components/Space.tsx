import React from 'react'

function Space(props:any) {
  return (
    <div className='w-full'>
      <div className={`w-screen pb-10 ${props.direction} ${props.color}`}
      style={{
        backgroundImage:`${props.backgroundImage}`,
        backgroundSize: `${props.bgSize}`
      }}>
      </div>
    </div>
  )
}

export default Space
