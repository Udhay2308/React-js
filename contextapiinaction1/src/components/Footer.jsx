import React from 'react'
import { useContext } from 'react'
import { Themedatacontext } from '../context/Themecontext'
const Footer = () => {
  const [theme,settheme] = useContext(Themedatacontext)
  
  return (
    <div className='foot'>
      <h1>This is footer.</h1>
      <h1>{theme}</h1>
      <button onClick={()=>{
          if(theme == 'light'){
            settheme('dark')
          }
          else{
            settheme('light')
          }
        }}>Change Theme</button>
    </div>
  )
}

export default Footer
