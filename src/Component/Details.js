import {  NavLink, useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import '../Css/Display.css'
import FooterCompo from "./Footer"
import axios from "axios"

function DetailsCompo(){
    const [data,setData]=useState([])



const {id}=useParams()
const newid=parseInt(id)


    useEffect (()=>{
        
           
           axios.get("http://localhost:4040/api/getdata")
                .then((res)=>setData(res.data))
                .catch((err)=>{
                    console.log("error")})              
            
            
       
    },[id])
    return(
        <>
        <div className="parent">
        
        <div className="innerman">
        <img src="https://tse3.mm.bing.net/th?id=OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU&pid=Api&P=0&h=180" alt="Not Found" className="men"/><span className="balam"> Balam Bisht</span>
        <h4 className="time">Sep 21,2023 Read 5 Min</h4>
        </div>
        <div className="outerlogo">
            <img className="logodtl" src="https://www.verfvanniveau.nl/wp-content/uploads/2019/08/logo-social-fb-facebook-icon.png"  alt="Not Found"/>
            <img className="logodtl" src="https://tse2.mm.bing.net/th?id=OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ&pid=Api&P=0&h=180" alt="Not Found"/>
            <img className="logodtl" src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" alt="Not Found"/>
            <img className="logodtl" src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="Not Found"/>
        </div>
       

       </div>




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
        <FooterCompo/>
        </>
    )
}
export default DetailsCompo
