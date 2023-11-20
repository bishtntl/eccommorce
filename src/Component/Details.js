import {  NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import '../Css/Display.css'
import FooterCompo from "./Footer"
import axios from "axios"

function DetailsCompo(){
    const [data,setData]=useState([])
  const Navi=useNavigate()


const {id}=useParams()
const newid=parseInt(id)


    useEffect (()=>{
        
           
           axios.get("https://eccommorce-backend.onrender.com/api/getdata")
                .then((res)=>setData(res.data))
                .catch((err)=>{
                    console.log("error")})              
            
            
       
    },[id])
    return(
        <>
      

        <div className="details_wrrraper">
       {data.filter((item)=>item.id===newid).map((item,index)=>{
        return(
            <div key={index} className="details_first_div">
       <img src={item.image} alt="Not Found"  className="all_images_details"/>
<div className="underdiv_details">
<h3 className="title_details">{item.name}</h3>
<p className="heading_details">{item.heading}</p>
     <span className="price_details">₹:{item.price}.00</span>
               
                   
                   
                    <p className="moredetails"> <h1>Discreption</h1>{item.para}</p>
                    <NavLink to="/addcard"><button className="btnaddcard_details">add to card</button></NavLink></div>
               
            </div>
        )
       })}

     
        
        </div>
        <button onClick={()=>Navi(-1)} className="goback">Go Back</button>
        <FooterCompo/>
        </>
    )
}
export default DetailsCompo
