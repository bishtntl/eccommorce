import { useEffect, useState} from "react"
import "./Css/Toy.css"
import { NavLink, useNavigate } from "react-router-dom"
import FooterCompo from "../Footer"

function PearCompo(){
    const [data,setData]=useState([])
    const Navi =useNavigate()

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

{/* <div className="fashion_container">
           
                <img src="https://www.jiomart.com/images/category/7470/apples-pears-20220802.jpeg" alt="Not Found" className="topimage_fashion"/>
             
        </div> */}








        <div className="image_toy_container">
          {data.filter((item)=>(item.id>=82) && (item.id<=84)).map((item,index)=>{
            return(
                <div>
                <div key={index} className="underdiv_toy">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_toy"/></NavLink>
                    
                    <div className="headingproduct_toy"><p >{item.heading.slice(0,50)}</p>
                    </div> 
                    <span className="price_toy">₹:{item.price}.00</span>
                    <h3 className="title_toy">{item.name}</h3>
                    <NavLink to="/addcard">  <button className="btnaddcard_toy">buy now</button></NavLink>

                </div>

                </div>
            )
          })} 

         

        </div>

        <button onClick={()=>Navi("/sport")} style={{width:"20vw",height:"8vh", borderRadius:"20px",position:"relative",left:"40%",top:"5vh",background:"#99ccff"}}>Go Back</button>
        <FooterCompo/>
     
        </>
    )
}
export default PearCompo