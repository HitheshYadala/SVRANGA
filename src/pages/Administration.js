import React, { Component } from 'react'
import Particles from 'particlesjs'
import "../components/compStyles/administration.css"

export default class Administration extends Component {
  componentDidMount(){
    window.onload = function() {
      Particles.init({
        selector: '.background',
        color:"green",
        maxParticles:1000
      });
    };
  }
  render() {
    return (
      <div className='container'> This is Administration Page</div>
    )
  }
}
