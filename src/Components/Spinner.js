import React, { Component } from 'react'
import loading from "./loading.gif"

export default class loadingSpinner extends Component {
  render() {
    return (
      <div className='text-center my-5' style={{height:'20px'}}>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}
