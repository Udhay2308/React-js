<<<<<<< HEAD
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themecontext from './context/Themecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Themecontext>
    <App />
    </Themecontext>
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ProductContext from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ProductContext>
     <App/>
   </ProductContext>
  </BrowserRouter>
>>>>>>> f4fbe26 (first commit)
)
