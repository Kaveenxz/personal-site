import React from 'react'

function Space(color:any) {

  console.log(color.color)
  const bg:any = color.color
  return (
    <div className='w-full'>
      <div className={`w-screen pb-10 rounded-bl-full rounded-br-full ${bg}`}>
      </div>
    </div>
  )
}

export default Space
