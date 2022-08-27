import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  console.log('is it working')
  const ref = useRef()
  useEffect(() => {
    mount(ref.current)
  }, [])
  return (
      <div ref={ref}/>
  )
}

export default MarketingApp