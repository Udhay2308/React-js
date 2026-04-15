import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themecontext from './context/Themecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Themecontext>
    <App />
    </Themecontext>
)
