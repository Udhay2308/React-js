import React, { createContext, useState } from 'react'

export const Themedatacontext = createContext()

const Themecontext = (props) => {
  const [theme, settheme] = useState('light')

  return (
    <Themedatacontext.Provider value={[theme, settheme]}>
      {props.children}
    </Themedatacontext.Provider>
  )
}

export default Themecontext