import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    console.log('this is before mount')
    mount(ref.current)
    console.log('this is after mount')
  })
  return (
      <div ref={ref}/>
  )
}

export default MarketingApp