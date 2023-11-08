import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import HomeCompo from "../Component/Home"
import GroceriesCompo from "../Component/Groceries"
import FashionCompo from "../Component/Fashion"
import PremiumCompo from "../Component/Premium"
import SportToyCompo from "../Component/SportToy"
import "../Css/Rou.css"
// import TeaCompo from "../Component/Sub/Tea"
// import CoffeCompo from "../Component/Sub/Coffee"
// import MenCompo from "../Component/Sub/Men"
// import WomenCompo from "../Component/Sub/Women"
// import PearCompo from "../Component/Sub/pears"
// import AppleCompo from "../Component/Sub/Apple"
// import ToyCompo from "../Component/Sub/Toy"
// import BabyToyCompo from "../Component/Sub/BabyToy"


function DisplayRoute(){

    return(
<>


 <div className="header_main">
    <img src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-store-icon-in-line-style-png-image_1736161.jpg" height="60" alt="Not Found"/>
          <span className="shop_heading">Shop Now</span>
          <input type="text" className="searchdata" placeholder="search item here"/>
 
          </div> 

<BrowserRouter>
<div className="route">

<NavLink to="/"  className="navlink" >Home</NavLink>
<NavLink to="/groceries" className="navlink"  >Groceries</NavLink>
<NavLink to="/fashion"  className="navlink">Fashion</NavLink>
<NavLink to="/premium"  className="navlink">Premium</NavLink> 
<NavLink to="/sport" className="navlink" >Sport&Toy</NavLink>
</div>








   <Routes>
       <Route path="/" element={<HomeCompo/>}>
       
       </Route>
       <Route path="/groceries" element={<GroceriesCompo/>}>
       {/* <Route path="tea" element={<TeaCompo/>}></Route>
       <Route path="coffee" element={<CoffeCompo/>}></Route> */}
       </Route>
       <Route path="/fashion" element={<FashionCompo/>}>

       {/* <Route path="men" element={<MenCompo/>}></Route>
       <Route path="women" element={<WomenCompo/>}></Route> */}
       </Route>
       <Route path="/premium" element={<PremiumCompo/>}>
        
       {/* <Route path="" element={<PearCompo/>}></Route>
       <Route path="coffee" element={<AppleCompo/>}></Route> */}
       </Route>
       <Route path="/sport" element={<SportToyCompo/>}>
       {/* <Route path="tea" element={<ToyCompo/>}></Route>
       <Route path="coffee" element={<BabyToyCompo/>}></Route> */}
        
        </Route> 
   </Routes>
   

   
   
   </BrowserRouter>
   



 
</>
    )
 

}

export default DisplayRoute