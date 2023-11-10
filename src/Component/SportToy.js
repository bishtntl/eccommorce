import { useEffect, useState } from "react"
import '../Css/Sport.css'
import { NavLink } from "react-router-dom"
import FooterCompo from "./Footer"

function SportToyCompo(){
    const [data,setData]=useState([])

    useEffect (()=>{
        async function fetchapi (){
             const ffdata= await fetch ("http://localhost:4040/api/sportone")
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
          {data.map((item,index)=>{
            return(
                <>
                <div key={index} className="underdiv_sport">
                <NavLink to={`/details/${item.id}`}>         <img src={item.image} alt="Not Found"  className="all_images_sport"/></NavLink>
                    <span className="price_sport"> ₹:{item.price}.00</span>
                    <h3 className="titel_sport">{item.heading.slice(0,15)}</h3>
                    <NavLink to="/addcard">  <button className="btnaddcard_sport">add to cast</button></NavLink>

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