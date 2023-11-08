import { useEffect, useState} from "react"
// import '../Css/Fashion.css'
import { NavLink } from "react-router-dom"
// import FooterCompo from "./Footer"
function PearCompo(){
    const [data,setData]=useState([])

    useEffect (()=>{
        async function fetchapi (){
             const ffdata= await fetch ("http://localhost:4040/api/pear")
             const res= await ffdata.json()

             setData(res)
        }
        fetchapi()
    })
    return(
        <>

<div className="fashion_container">
           {data.filter((item)=>item.id===16).map((item,index)=>{
            return(
                <div key={index} className="underdiv_two_fashion">
                <img src={item.images} alt="Not Found" className="topimage_fashion"/>
                </div>
            )
           })}
        </div>








        <div className="image_fashion_container">
          {data.map((item,index)=>{
            return(
                <div>
                {/* <div key={index} className="underdiv_fashion">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_fashion"/></NavLink>
                    
                    <div className="headingproduct"><p >{item.heading.slice(0,50)}</p>
                    </div> 
                    <span className="price_fashion">₹:{item.price}.00</span>
                    <h3 className="title_fashion">{item.name}</h3>
                    <button className="btnaddcard_fashion">buy now</button>

                </div> */}
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_fashion"/></NavLink>

                </div>
            )
          })}

        </div>
        {/* <FooterCompo/> */}
        </>
    )
}
export default PearCompo