import React from 'react'

function HOC({children}) {
    //Higher Order Components: Al encerrar algo entre el elemento, me llega a este Component como "CHILDREN"

  return (
    <>
        {children}
    </>
  )
}

export default HOC
