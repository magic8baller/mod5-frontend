import React, { Component } from 'react'
//HOC !!! WILL BE HELPFUL ONCE I GET THIS SHIT WORKING
function authorize(RenderedComponent, props) {
  return class extends Component {
    componentDidMount() {
      if (!localStorage.getItem('token') && !localStorage.getItem('loading')) {
        this.props.history.push('/')
      }
    }

    render() {
      console.log('loading state', localStorage.getItem('loading'))
      return <RenderedComponent {...props} {...this.props} />
    }
  }
}

export default authorize
