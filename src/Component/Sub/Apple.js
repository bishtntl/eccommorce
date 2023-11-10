import { useEffect, useState} from "react"
import './Css/Apple.css'
import { NavLink, useNavigate } from "react-router-dom"
import FooterCompo from "../Footer"
function PearCompo(){
    const [data,setData]=useState([])
    const Navi =useNavigate()
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

<div className="apple_container">
           
                <img src="https://www.jiomart.com/images/category/7470/apples-pears-20220802.jpeg" alt="Not Found" className="topimage_apple"/>
             
        </div>








        <div className="image_apple_container">
          {data.map((item,index)=>{
            return(
                <div>
                <div key={index} className="underdiv_apple">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_apple"/></NavLink>
                    
                    <div className="headingproduct_apple"><p >{item.heading.slice(0,50)}</p>
                    </div> 
                    <span className="price_apple">₹:{item.price}.00</span>
                    <h3 className="title_apple">{item.name}</h3>
                    <NavLink to="/addcard"> <button className="btnaddcard_apple">buy now</button></NavLink>

                </div>

                </div>
            )
          })} 

         

        </div>

        <button className="goback" onClick={()=>Navi("/premium")} >Go Back</button>
        <FooterCompo/>
     
        </>
    )
}
export default PearCompo