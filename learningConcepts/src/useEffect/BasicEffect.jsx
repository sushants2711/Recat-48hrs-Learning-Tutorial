import React, { useEffect } from 'react'

export const BasicEffect = () => {

    useEffect(() => {
        console.log("UseEffect mount in first time")
    },[])

  return (
    <>
    <h1>Please check console useEffect running or not</h1>
    </>
  )
}
