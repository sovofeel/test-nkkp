import React from 'react'

export const useInterval = (callback: Function, delay: number) => {
  const [isFirstCall, setIsFirstCall] = React.useState(true)
  const savedCallback = React.useRef(null)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    function tick() {
      savedCallback?.current && savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      if (isFirstCall) {
        tick()
        setIsFirstCall(false)
      }
      return () => clearInterval(id)
    }
  }, [delay])
}
