import React, {useEffect, useRef} from 'react'
import {mount} from 'auth/AuthApp'
import {useHistory} from 'react-router-dom'

const AuthApp = ({onSignIn}) => {
  const ref = useRef(null)
  const history = useHistory()
  useEffect(() => {
    const {onParentNavigate} = mount(
        ref.current, {
          initialPath: history.location.pathname,
          onNavigate: function({pathname: nextPathname}) {
            const {location: {pathname}} = history
            if (pathname !== nextPathname) history.push(nextPathname)
          },
          onSignIn
        })
    history.listen(onParentNavigate)
  }, [])
  return <div ref={ref}/>
}

export default AuthApp