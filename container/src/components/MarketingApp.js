import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  console.log('is it working')
  const ref = useRef(null)
  useEffect(() => {
    console.log('this is log from Marketing App useEffect in Container App.')
    mount(ref.current)
  })
  return <div ref={ref}/>
}

export default MarketingApp