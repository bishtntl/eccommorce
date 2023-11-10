import { useEffect, useState} from "react"
import "./Css/Tea.css"
import { NavLink, useNavigate } from "react-router-dom"
import FooterCompo from "../Footer"

function PearCompo(){
    const [data,setData]=useState([])
    const Navi =useNavigate()

    useEffect (()=>{
        async function fetchapi (){
             const ffdata= await fetch ("http://localhost:4040/api/tea")
             const res= await ffdata.json()

             setData(res)
        }
        fetchapi()
    })
    return(
        <>

<div className="tea_container">
           
                <img src="https://www.jiomart.com/images/category/34/tea-20220519.jpeg" alt="Not Found" className="topimage_tea"/>
             
        </div>








        <div className="image_tea_container">
          {data.map((item,index)=>{
            return(
                <div>
                <div key={index} className="underdiv_tea">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_tea"/></NavLink>
                    
                    <div className="headingproduct_tea"><p >{item.heading.slice(0,50)}</p>
                    </div> 
                    <span className="price_tea">₹:{item.price}.00</span>
                    <h3 className="title_tea">{item.name}</h3>
                    <NavLink to="/addcard"> <button className="btnaddcard_tea">buy now</button></NavLink>

                </div>

                </div>
            )
          })} 

         

        </div>

        <button onClick={()=>Navi("/groceries")} style={{width:"20vw",height:"8vh", borderRadius:"20px",position:"relative",left:"40%",top:"5vh",background:"#99ccff"}}>Go Back</button>
        <FooterCompo/>
     
        </>
    )
}
export default PearCompo