const React = require('react')
const ReactDom = require('react-dom/client')
const WordRelay = require('./WordRelay')

const Client = () => {
  return (
    <div>
      <WordRelay></WordRelay>
    </div>
  )
}

ReactDom.createRoot(document.querySelector('#root')).render(<Client></Client>)
