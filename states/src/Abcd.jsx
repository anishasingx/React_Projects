import React from 'react'

const Abcd = ({nameset}) => {
  return (
    <div>
      <button onClick={() =>nameset("ABCD")}>Child</button>
    </div>
  )
}

export default Abcd
