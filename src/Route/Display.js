import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import HomeCompo from "../Component/Home"
import GroceriesCompo from "../Component/Groceries"
import FashionCompo from "../Component/Fashion"
import PremiumCompo from "../Component/Premium"
import SportToyCompo from "../Component/SportToy"
import "../Css/Rou.css"
import TeaCompo from "../Component/Sub/Tea"
import CoffeCompo from "../Component/Sub/Coffee"
import MenCompo from "../Component/Sub/Men"
import WomenCompo from "../Component/Sub/Women"
import PearCompo from "../Component/Sub/pears"
import AppleCompo from "../Component/Sub/Apple"
import ToyCompo from "../Component/Sub/Toy"
import BabyToyCompo from "../Component/Sub/BabyToy"
import AddCard from "../Component/AddToCard"
import DetailsCompo from "../Component/Details"
import { useState } from "react"
import LoginButton from "../LoginSignUp/Login"
import RegisterButton from "../LoginSignUp/Register"


function DisplayRoute(){



  // const [isHomeData,setIsHomeData] = useState(false);
  // const [isAllData,setIsAllData] = useState(false);
  const [isFashiondata, setIsFashionData] = useState(false);
  const [isPremiumData,setIsPremiumData]  = useState(false);
  const [isGrocerydata, setIsGroceryData] = useState(false);
  const [isSportData,setIsSportData]  = useState(false);
  // const toggleHomeMenu = () => {
  //   setIsHomeData(!isHomeData);
  // };
  // const toggleAllMenu =()=>{
  //   setIsAllData(!isAllData);
  // };
  const toggleFashionMenu = () => {
    setIsFashionData(!isFashiondata);
  };
  const togglePremiumMenu =()=>{
    setIsBeautyData(!isBeautyData);
  };
  const toggleGroceryMenu = () => {
    setIsGroceryData(!isGrocerydata);
  };
  const toggleSportMenu =()=>{
    setIsElectronicsData(!isElectronicsData);
  };





    return(
<>


 <div className="header_main">
    <img src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-store-icon-in-line-style-png-image_1736161.jpg" height="60" alt="Not Found"/>
          <span className="shop_heading">Shop Now</span>
          <input type="text" className="searchdata" placeholder="search item here"/>


<button>Sign Up</button>

 
          </div> 

<BrowserRouter>
<div className="route">



<NavLink to="/home"  className="navlink" >Home</NavLink>




<ul>
<li >
                  <div onDoubleClick={toggleGroceryMenu } className="groceriesnav">
                  <NavLink to="/groceries" className="navlink"  >Groceries</NavLink>
                  </div>
                  {isGrocerydata && (
                    <ul className="sub_groceries">
                    <li>
                    <NavLink to="/groceries/tea">Tea</NavLink>
                    </li>
                    <li>
                    <NavLink to="/groceries/coffee">Coffee</NavLink>
                    </li>
                    
                  </ul>
                  )}
                </li>



</ul>

       
<ul>
  <li>
<div onDoubleClick={toggleFashionMenu} className="groceriesnav">
<NavLink to="/fashion"  className="navlink">Fashion</NavLink>
</div>
</li>


{isFashiondata && (
  <ul className="sub_groceries">
  <li>
   <NavLink to="/fashion/men" >men</NavLink>
 </li>
 <li>
   <NavLink to="/fashion/women">women</NavLink>
 </li>
 </ul>
)}


</ul>
 





<ul>
  <li>
  <div onDoubleClick={togglePremiumMenu} className="groceriesnav">
<NavLink to="/premium"  className="navlink">Premium</NavLink> 
</div>
</li>

          {isPremiumData && (
            <ul className="sub_groceries">
            <li>
             <NavLink to="/premium/pears">pears</NavLink>
           </li>
           <li>
             <NavLink to="/premium/apple">Apple</NavLink>
           </li>
 
           </ul>
          )}
     
</ul>



<ul>
  <li>
    <div>
    <NavLink to="/sport" className="navlink" >Sport&Toy</NavLink>
    </div>

  </li>
{isSportData && (
  <ul className="sub_groceries">
  <li>
              <NavLink to="/sport/toy">Action & Toy Figure</NavLink>
            </li>
            <li>
              <NavLink to="/sport/babytoy">Baby & Toddler Toys</NavLink>
            </li>
            </ul>
)}


</ul>

</div>





{/* *********************************************loginand register******************************* */}




{/* <NavLink to="/home"  ><button className="btnone">Home</button></NavLink> */}
      
      <NavLink to="/register" ><button className="btnone">Regiter</button></NavLink>
      <NavLink to="/"><button className="btnone">Login</button></NavLink>









{/* **************************************************************** */}









   <Routes>
       <Route path="/home" element={<HomeCompo/>}></Route>


       
       <Route path="/groceries" element={<GroceriesCompo/>}> </Route>
        <Route path="groceries/tea" element={<TeaCompo/>}></Route>
       <Route path="groceries/coffee" element={<CoffeCompo/>}></Route> 
      




       <Route path="/fashion" element={<FashionCompo/>}> </Route>

        <Route path="fashion/men" element={<MenCompo/>}></Route>
       <Route path="fashion/women" element={<WomenCompo/>}></Route> 
      



       <Route path="/premium" element={<PremiumCompo/>}> </Route>
        
        <Route path="premium/pears" element={<PearCompo/>}></Route>
       <Route path="premium/apple" element={<AppleCompo/>}></Route> 
      



       <Route path="/sport" element={<SportToyCompo/>}>  </Route> 
        <Route path="sport/toy" element={<ToyCompo/>}></Route>
       <Route path="sport/babytoy" element={<BabyToyCompo/>}></Route> 




       <Route path="/addcard" element={<AddCard/>}></Route>

       <Route path="/details/:id" element={<DetailsCompo/>}></Route>
      





       <Route path="/" element={<LoginButton/>}></Route>
        <Route path="/register" element={<RegisterButton/>}></Route>
   </Routes>
   

 




   
     

   

   
   
   </BrowserRouter>
   



 
</>
    )
 

}

export default DisplayRoute