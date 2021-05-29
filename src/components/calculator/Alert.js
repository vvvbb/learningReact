import React from 'react'

const Alert=({type, text})=> {
    return (
      <section className={`alert alert-${type}`}>
          {text}
      </section>
    )
}
export default Alert;