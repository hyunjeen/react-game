import React, { useRef, useState } from 'react'

const NumberBaseball = () => {
  //야구게임 넘버 생성기
  const BaseballNumber = () => {
    const arr = []
    for (let i = 1; i < 5; i++) {
      const n = Math.floor(Math.random() * 9 + 1)
      arr.includes(n) ? i-- : arr.push(n)
    }
    return arr
  }
  const [complete, setcomplete] = useState(false)
  const [strikeScore, setstrikeScore] = useState(0)
  const [ballScore, setballScore] = useState(0)
  const [value, setValue] = useState('')
  const [answer, setAnswer] = useState(() => {
    return BaseballNumber()
  })

  const tryNum = useRef(0)

  const chnageHandler = (e) => {
    setValue(e.target.value)
  }
  const formHandler = (e) => {
    e.preventDefault()
    if (new Set(value).size === value.length) {
      //인풋값 4자리 숫자중 중복된 슷자 값이없을경우
      setballScore(0)
      setstrikeScore(0)
      tryNum.current++
      if (answer.join('') === value) {
        setcomplete(true)
      } else {
        for (let i = 0; i < answer.length; i++) {
          answer.includes(+value[i])
            ? answer[i] == value[i]
              ? setstrikeScore((prev) => prev + 1)
              : setballScore((prev) => prev + 1)
            : null
        }
      }
    } else {
      alert('중복됐는뎁쇼')
    }
  }

  const newGameHandler = () => {
    tryNum.current = 0
    setcomplete(false)
    setAnswer(BaseballNumber())
    setballScore(0)
    setstrikeScore(0)
  }
  return (
    <>
      <h1>
        {complete ? (
          <>
            <span>홈런</span>
            <button onClick={newGameHandler}>새게임 시작</button>
          </>
        ) : (
          <p>
            {strikeScore}스트라이크 {ballScore} 볼 입니다.
          </p>
        )}
      </h1>
      <form onSubmit={formHandler}>
        <input
          type="number"
          value={value}
          onChange={chnageHandler}
          maxLength="4"
          minLength="4"
        />
        <button type="submit">제출</button>
      </form>
      <p>시도 {tryNum.current}</p>
    </>
  )
}
export default NumberBaseball
