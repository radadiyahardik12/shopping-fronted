import React from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import OrderPage from './OrderPage'
import CartPage from './CartPage'

const Home = () => {
  const { globleView } = useSelector((state) => state.productReducer)
  return (
    <div className="flex flex-col min-h-screen min-w-full  ">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {globleView === 'orderView' 
          ? <OrderPage /> 
          : globleView === "cardView" 
            ? <CartPage /> 
            : globleView === "homeView"
              ? <Dashboard />
              : <Dashboard />
            }
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home