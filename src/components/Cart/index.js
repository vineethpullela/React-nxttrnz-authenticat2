import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Cart = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }

  return (
    <div className="cart-container">
      <Header />
      <div className="cart">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-icon"
        />
        <p className="cart-title">Cart</p>
      </div>
    </div>
  )
}

export default withRouter(Cart)
