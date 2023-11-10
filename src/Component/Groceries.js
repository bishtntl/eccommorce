import { useEffect, useState } from "react"

import '../Css/Groceries.css'
import { NavLink } from "react-router-dom"


function GroceriesCompo(){
    const [data,setData]=useState([])

    useEffect (()=>{
        async function fetchapi (){
             const ffdata= await fetch ("http://localhost:4040/api/getdata")
             const res= await ffdata.json()

             setData(res)
        }
        fetchapi()
    })
    return(
<>
{/* <Outlet/> */}

        <div className="groceries_container">
        {data.filter((item)=>item.id===1).map((item,index)=>{
         return(
             <div key={index} className="underdiv_two">
             <img src={item.images} alt="Not Found" className="groceriestop"/>
             </div>
         )
        })}
     </div>












        <div className="image_groceries_container">
          {data.filter((item)=>item.category==="groceries").map((item,index)=>{
            return(
                <>
                <div key={index} className="underdiv_groceries">
                <NavLink to={`/details/${item.id}`}>        <img src={item.image} alt="Not Found"  className="all_images_groceries"/></NavLink>
                    <div className="headingproduct_groceries"><p >{item.heading.slice(0,40)}</p>
                    </div>
                    <span className="price">{item.price}</span>
                    <h3>{item.heading.slice(0,15)}</h3>
                    
                    <NavLink to="/addcard"><button className="btnaddcard"> add to card</button></NavLink>

                </div>

                </>
            )
          })}


        </div>

       
        <div className="footermain_groceries">

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

</div>
</div>
        </>
    )
}
export default GroceriesCompo