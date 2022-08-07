import React from 'react'
import ReactDom from 'react-dom/client'
import NumberBaseball from './NumberBaseball'

const Client = () => {
  return (
    <div>
      <NumberBaseball></NumberBaseball>
    </div>
  )
}

ReactDom.createRoot(document.querySelector('#root')).render(<Client></Client>)
