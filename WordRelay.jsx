const React = require('react')
const { useState, useRef } = require('react')
require('./WordRelay.css')

const WordRelay = () => {
  const [word, setWord] = useState('제로초')
  const [input, setinput] = useState('')
  const [answer, setanswer] = useState('')
  const inputEl = useRef()
  const submitHandler = (e) => {
    e.preventDefault()

    if (word.slice(-1) === input.slice(0, 1)) {
      setanswer('정답입니다')
      setWord(input)
      setinput('')
      inputEl.current.focus()
      return
    }
    setanswer('실패')
  }
  const inputChangeHandler = (e) => {
    setinput(e.target.value)
  }
  return (
    <div className="word-wrap">
      <div className="title">{word}</div>
      <form className="action" onSubmit={submitHandler}>
        <input
          type="text"
          ref={inputEl}
          value={input}
          onChange={inputChangeHandler}
        ></input>
        <button>제출</button>
      </form>
      <div>{answer}</div>
    </div>
  )
}

module.exports = WordRelay
