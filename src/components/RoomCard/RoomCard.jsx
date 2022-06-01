import React from 'react'


const RoomCard = ({room}) => {

  return (
    <>
      <div>
              <h1>{room.course}</h1>
                <h2>{room.year}</h2>
                <h2>{room.section}</h2>
      </div>
    </>
  )
}

export default RoomCard