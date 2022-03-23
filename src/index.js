import React from 'react'
import ReactDOM from 'react-dom'
import { CartContextProvider } from './Context/useCartContext'

import App from './App'

ReactDOM.render(
<CartContextProvider>
    <App />
</CartContextProvider>, document.getElementById('root'))