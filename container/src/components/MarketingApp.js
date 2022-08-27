import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
    window.mount = mount
  })
  return <div ref={ref}/>
}

export default MarketingApp