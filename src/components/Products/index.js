import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }

  return (
    <div className="products-container">
      <Header />
      <div className="products">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-icon"
        />
        <p className="products-title">Products</p>
      </div>
    </div>
  )
}

export default withRouter(Products)
