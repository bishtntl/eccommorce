import { useEffect, useState} from "react"
import "./Css/Men.css"
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

<div className="men_container">
           
                <img src="https://www.jiomart.com/images/category/496/men-20200831.jpg" alt="Not Found" className="topimage_men"/>
             
        </div>








        <div className="image_men_container">
          {data.filter((item)=>(item.id>=63) && (item.id<=65)).map((item,index)=>{
            return(
                <div>
                <div key={index} className="underdiv_men">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_men"/></NavLink>
                    
                    <div className="headingproduct_men"><p ></p>
                    </div> 
                    <span className="price_men">₹:{item.price}.00</span>
                    <h3 className="title_men">{item.name}</h3>
                    <NavLink to="/addcard"> <button className="btnaddcard_men">add to cart</button></NavLink>

                </div>

                </div>
            )
          })} 

         

        </div>

        <button onClick={()=>Navi("/fashion")} style={{width:"20vw",height:"8vh", borderRadius:"20px",position:"relative",left:"40%",top:"5vh",background:"#99ccff"}}>Go Back</button>
        <FooterCompo/>
     
        </>
    )
}
export default PearCompo