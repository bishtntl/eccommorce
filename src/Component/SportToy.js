import { useEffect, useState } from "react"
import '../Css/Sport.css'
import { NavLink } from "react-router-dom"
import FooterCompo from "./Footer"

function SportToyCompo(){
    const [data,setData]=useState([])

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

<div className="sport_container">
        {data.filter((item)=>item.id===48).map((item,index)=>{
         return(
             <div key={index} className="underdiv_two_sport">
        <img src={item.images} alt="Not Found" className="topimage_sport"/>
             </div>
         )
        })}
     </div>







        <div className="image_sport_container"> 
          {data.filter((item)=>item.category==="sport").map((item,index)=>{
            return(
                <>
                <div key={index} className="underdiv_sport">
                <NavLink to={`/details/${item.id}`}>         <img src={item.image} alt="Not Found"  className="all_images_sport"/></NavLink>

                <div className="underdiv_sport_two">
                <span className="price_sport"> ₹:{item.price}.00</span>
                    {/* <h3 className="titel_sport">{item.heading}</h3> */}
                    <NavLink to="/addcard">  <button className="btnaddcard_sport">add to cart</button></NavLink>
                </div>
                   

                </div>

                </>
            )
          })}

        </div>
        <FooterCompo/>
        </>
    )
}
export default SportToyCompo