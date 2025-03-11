import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
   return (
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/discover" element={<Discover />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>
   );
 };
 
 export default AppRouter;