import React from 'react'


const withSomething = Component => {
  const something = 'something'

  return props => <Component something={something} {...props}/>
}

export default withSomething
