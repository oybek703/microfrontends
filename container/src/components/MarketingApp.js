import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    console.log(ref.current)
    console.log(mount)
    console.log(typeof mount)
    console.log(mount(ref.current))
    // mount(ref.current)
  })
  return (
      <div ref={ref}/>
  )
}

export default MarketingApp