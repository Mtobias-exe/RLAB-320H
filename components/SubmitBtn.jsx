import React from 'react'
import Button from './Button'


function SubmitBtn({className, children, dispatch, type, payload}) {
  return (
    <Button
    onClick={() => dispatch({ type: type, payload: payload })}
    className={className}
  >
    {children}
  </Button>
  )
}


export default SubmitBtn
