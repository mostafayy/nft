import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/live-auction/LiveAuction'
import SellerSection from '../components/ui/Seller-section/SellerSection'
import Trending from '../components/ui/Trending-section/Trending'
import StepSecion from '../components/ui/Step-section/StepSecion'

const Home = () => {
  return (
    <div>
<HeroSection/>
<LiveAuction/>
<SellerSection/>
<Trending/>
<StepSecion/>

    </div>
  )
}

export default Home