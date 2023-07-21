import React from 'react';

import Footer from '../Footer';
import Navbar from '../Composant/NavBar';
import BookingForm from '../Composant/BookingForm';



function BookingPage() {
  return (
    <div>
      <Navbar/>
      
      <BookingForm/>
      <div className="space"></div>

      <Footer/>
    
      
      
      
    </div>
  );
}


export default BookingPage;
