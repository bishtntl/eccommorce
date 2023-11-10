import { useEffect, useState} from "react"
import "./Css/Women.css"
import { NavLink, useNavigate } from "react-router-dom"
import FooterCompo from "../Footer"

function PearCompo(){
    const [data,setData]=useState([])
    const Navi =useNavigate()

    useEffect (()=>{
        async function fetchapi (){
             const ffdata= await fetch ("http://localhost:4040/api/womendress")
             const res= await ffdata.json()

             setData(res)
        }
        fetchapi()
    })
    return(
        <>


<div className="women_container">
           
                <img src="https://www.jiomart.com/images/category/493/women-20200831.jpg" alt="Not Found" className="topimage_women"/>
             
        </div> 








        <div className="image_women_container">
          {data.map((item,index)=>{
            return(
                <div>
                <div key={index} className="underdiv_women">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_women"/></NavLink>
                    
                    <div className="headingproduct_women"><p >{item.heading.slice(0,50)}</p>
                    </div> 
                    <span className="price_women">₹:{item.price}.00</span>
                    <h3 className="title_women">{item.name}</h3>
                    <NavLink to="/addcard">  <button className="btnaddcard_women">buy now</button></NavLink>

                </div>

                </div>
            )
          })} 

         

        </div>

        <button onClick={()=>Navi("/fashion")} className="goback">Go Back</button>
        <FooterCompo/>
     
        </>
    )
}
export default PearCompo