import { useEffect, useState } from "react"
import '../Css/Premium.css'
import { NavLink} from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../Redux/Slice"

function PremiumCompo(){
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    useEffect (()=>{
        async function fetchapi (){
            const ffdata= await fetch ("http://localhost:5050/api/getdata")
            const res= await ffdata.json()
            setData(res)
       }
       fetchapi()     
    })
    return(
        <>
        <div className="premium_container">
           {data.filter((item)=>item.id===32).map((item,index)=>{
            return(
                <div key={index} className="underdiv_two_premium">
                <img src={item.images} alt="Not Found" className="topimage_premium"/>
                </div>
            )
           })}
        </div>
        <div className="image_premium_container">
          {data.filter((item)=>item.category==="premium").map((item,index)=>{
            const {
                id = item.id,
                name=item.name,
                image = item.image,
                price= parseInt(item.price),
              }= item;
            return(
                <>
                <div key={index} className="underdiv_premium">
                <NavLink to={`/details/${item.id}`}>    <img src={item.image} alt="Not Found"  className="all_images_premium"/></NavLink>
                <div className="underdiv_premium_two">
                <span className="price_premium">₹:{item.price}.00</span>
                    <h2 className="title_premium">{item.name}</h2>
                    <NavLink to={`/addcard/${item.id}`}>  <button onClick={()=>dispatch(addtoCart({id,price,image,name}))} className="btnaddcard_premium">add to cart</button></NavLink>
                </div>
                </div>
                </>
            )
          })}
        </div>
        <div className="footermain_premium">

<div className="logosdtl">
    <img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found" />
    <img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found" />
    <img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Not Found" />
    <img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found" />


    </div>
    <div className="location">  <img className="logoonedtl" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found" /></div> <span className="locdtl">Gurgaon Haryana</span>




    <img className="logoonephonedtl" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found" /><span className="phodtl">123467890</span>


    <img className="logoonemaildtl" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found" /><span className="emaildtl">balambisht467@gmail.com</span>


    <div className="gotonavdtl">
<p style={{color:'white', fontSize:'1.1em'}}>Click On This Link</p>
<NavLink to="/home"  className="navlink" >Home</NavLink>
<NavLink to="/groceries"  className="navlink" >Groceries</NavLink>
<NavLink to="/fashion"  className="navlink"  >Fashion</NavLink>
<NavLink to="/premium" className="navlink" >Premium</NavLink>  
<NavLink to="/sport" className="navlink"  >Sport&Toy</NavLink>
</div>
</div>
        </>
    )
}
export default PremiumCompo