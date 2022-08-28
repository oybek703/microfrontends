import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    console.log('BEFORE => ', ref.current)
    mount(ref.current)
    console.log('AFTER => ', ref.current)
  })
  return <div ref={ref}/>
}

export default MarketingApp