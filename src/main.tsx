import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { Auth0ProviderWithNavigate } from './auth0.provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>,
)
