import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    // mount(ref.current)
    console.log(mount)
  })
  console.log(mount)
  return (
      <h2>THIS SHOULD BE MARKETING APP CONTENT</h2>
  )
}

export default MarketingApp