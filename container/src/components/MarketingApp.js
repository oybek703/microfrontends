import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
    console.log(mount)
    window.mount = mount
  })
  return <div ref={ref}/>
}

export default MarketingApp