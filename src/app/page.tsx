import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from "./components/sections/Hero";
import Category from './components/sections/category';
import TopSelling from './components/sections/TopSelling';
// import EasyandFast from './components/sections/EasyandFast';
import TravelBooking from './components/sections/EasyandFast';
import Brands from './components/sections/Brands';
import SubscriptionForm from './components/sections/SubscriptionForm';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import TestimonialsCarousel from './components/sections/TestimonialsCarousel';

export default function Home() {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
 
<Category/>
<TopSelling/>
<TravelBooking/> 

 <Brands/>
 <TestimonialsCarousel />

<SubscriptionForm/>
<Footer/>
    </div>
  );
}
