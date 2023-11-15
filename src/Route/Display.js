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
import {  useState } from "react"
import LoginButton from "../LoginSignUp/Login"
import RegisterButton from "../LoginSignUp/Register"
// import PrivateCompo from "../Component/Private"
import LogOut from "../LoginSignUp/Logout"


function DisplayRoute() {

  const [count, setCount] = useState(false)

  // const auth=localStorage.getItem("token")
  // const Navi=useNavigate()

  const [isFashiondata, setIsFashionData] = useState(false);
  const [isPremiumData, setIsPremiumData] = useState(false);
  const [isGrocerydata, setIsGroceryData] = useState(false);
  const [isSportData, setIsSportData] = useState(false);
  

  const toggleFashionMenu = () => {
    setIsFashionData(!isFashiondata);
  };
  const togglePremiumMenu = () => {
    setIsPremiumData(!isPremiumData);
  };
  const toggleGroceryMenu = () => {
    setIsGroceryData(!isGrocerydata);
  };
  const toggleSportMenu = () => {
    setIsSportData(!isSportData);
  };


// const logoutfunc =()=>{
//      localStorage.clear()
//      Navi("/register")


// }

 


  return (
    <>
       <BrowserRouter>

      <div className="header_main">
        <img src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-store-icon-in-line-style-png-image_1736161.jpg" height="60" alt="Not Found" className="imageicon" />
        <span className="shop_heading">Shop Now</span>
        <input type="text" className="searchdata" placeholder="search item here" />

        <NavLink to="/register" >  <button className="btnone">Regiter</button></NavLink>

      
        {/* <button className="signup">Sign Up</button> */}
      {/* {auth ? <NavLink  to="/register"><button  className="btnone">Logout</button></NavLink> : <NavLink to="/register" ><button className="btnone">Regiter</button></NavLink>
}   */}
      
        
{/* <NavLink to="/"><button className="btnone">Login</button></NavLink> */}

        <div
                    onClick={() => setCount(!count)}
                    className="display"
                   >
                    <i className={`fa-solid ${count ? 'fa-close' : 'fa-bars'}`}></i>
                </div>

      </div>

      

    
          <div className="routeparent">
        <li><NavLink to="/"  >Home</NavLink></li>
      
            <li >
              <div onDoubleClick={toggleGroceryMenu} className="underdiv_all_nav">      
            
                <NavLink to="/groceries"  className="navlink" >Groceries</NavLink>
               
              </div>
              {isGrocerydata && (
                <ul  className="sub_groceries">
               
                  <li>
                    <NavLink to="/groceries/tea">Tea</NavLink>
                  </li>
                  <li>
                    <NavLink to="/groceries/coffee">Coffee</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onDoubleClick={toggleFashionMenu} className="underdiv_all_nav">
           
                <NavLink to="/fashion"  className="navlink"  >Fashion</NavLink>
            
              </div>
            {isFashiondata && (
              <ul className="sub_fashion">
           
                <li>
                  <NavLink to="/fashion/men" >men</NavLink>
                </li>
                <li>
                  <NavLink to="/fashion/women">women</NavLink>
                </li>
              </ul>
            )}
            </li>         
            <li>
              <div onDoubleClick={togglePremiumMenu} className="underdiv_all_nav" >
            
                <NavLink to="/premium" className="navlink" >Premium</NavLink>
            
              </div>
            {isPremiumData && (
              <ul className="sub_premium">
           
                <li>
                  <NavLink to="/premium/pears">pears</NavLink>
                </li>
                <li>
                  <NavLink to="/premium/apple">Apple</NavLink>
                </li>

              </ul>
            )}
                </li>
            <li>
              <div onDoubleClick={toggleSportMenu}
              className="underdiv_all_nav">
            
                <NavLink to="/sport" className="navlink"  >Sport&Toy</NavLink>
       
              </div>
            {isSportData && (
              <ul className="sub_sport">
            
                <li>
                  <NavLink to="/sport/toy">Toy Figure</NavLink>
                </li>
                <li>
                  <NavLink to="/sport/babytoy">Baby Toys</NavLink>
                </li>
              </ul>
            )}
     </li>

          </div>






        {/* *********************************************loginand register******************************* */}


         {/* <NavLink to="/" ><button className="btnone">Regiter</button></NavLink>
        <NavLink to="/login"><button className="btnone">Login</button></NavLink> */}
{/*


{/* *****************************************************************? */}
<div className={count ? 'hambergerlinksShows' : 'hambergerlinksHide'}>
              <ul className="navbar-listResponsive">
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/home" className="navlinkResponsive">
                    Home
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/groceries" className="navlinkResponsive">
                  Groceries
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/fashion" className="navlinkResponsive">
                  Fashion
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/premium" className="navlinkResponsive">
                  premium
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/sport" className="navlinkResponsive">
                  sport
                  </NavLink>
                </li>
              
              </ul>
              </div>






        {/* **************************************************************** */}







     

        <Routes>
          {/* <Route element={<PrivateCompo/>}> */}
          <Route path="/" element={<HomeCompo />}></Route>



          <Route path="/groceries" element={<GroceriesCompo />}> </Route>
          <Route path="groceries/tea" element={<TeaCompo />}></Route>
          <Route path="groceries/coffee" element={<CoffeCompo />}></Route>





          <Route path="/fashion" element={<FashionCompo />}> </Route>

          <Route path="fashion/men" element={<MenCompo />}></Route>
          <Route path="fashion/women" element={<WomenCompo />}></Route>




          <Route path="/premium" element={<PremiumCompo />}> </Route>

          <Route path="premium/pears" element={<PearCompo />}></Route>
          <Route path="premium/apple" element={<AppleCompo />}></Route>




          <Route path="/sport" element={<SportToyCompo />}>  </Route>
          <Route path="sport/toy" element={<ToyCompo />}></Route>
          <Route path="sport/babytoy" element={<BabyToyCompo />}></Route>




          <Route path="/addcard" element={<AddCard />}></Route>

          <Route path="/details/:id" element={<DetailsCompo />}></Route>


          {/* </Route> */}




          <Route path="/login" element={<LoginButton />}></Route>
          <Route path="/register" element={<RegisterButton />}></Route>
          <Route path="/logout" element={<LogOut/>}></Route>
        </Routes>














      </BrowserRouter>





    </>
  )


}

export default DisplayRoute