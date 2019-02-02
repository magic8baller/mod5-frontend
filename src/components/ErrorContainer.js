import React from 'react'
import { Button } from 'semantic-ui-react'
import { Router, Link, Route } from 'react-router-dom'
import BASE_URL from '../adapters/baseUrl'

const ErrorContainer = () => {
  return (
    <div>
      <div className="main-header">uh oh, something went wrong!</div>
      <Button color="red" as="a" href={BASE_URL}>
        back home
      </Button>
    </div>
  )
}

export default ErrorContainer
