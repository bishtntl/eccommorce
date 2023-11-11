// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Store } from "../store/store";


// function DetailsCompo(){
//  const [data,setData]=useState([])
    // const [contextData]=useContext(Store)
    // console.log(contextData)
    // const {id}=useParams()
    // console.log(id)



    // useEffect(()=>{
    //     async function fetchdata(){
    //         const detail= await fetch("http://localhost:4040/api/fashiondatas")
    //         const res=detail.json()
    //        setData(res)
        //    console.log(res)
    //     }
    //     fetchdata()
    // })
// console.log(contextData[1].category)
    // const dynamicImg = contextData[id].category;
    // console.log(id)
    //  const dynImage=id.image
    //  console.log(dynImage)
  

    // const selectItem=contextData.find((item)=>item.id===parseInt(id))
    // console.log(selectItem.image)

    // return(
    //     <>
    //     {data.map((item,index)=>{
    //         return(
    //             <>
    //             {/* <div key={index} className="underdiv_groceries"> */}
    //             <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_groceries"/></NavLink>
                    
                    {/* <div className="headingproduct"><p >{item.heading.slice(0,50)}</p>
                    </div> */}
                    {/* <span className="price">₹:{item.price}.00</span> */}
                    {/* <h3 >{item.name}</h3>
                    <button className="btnaddcard">buy now</button> */}

                {/* </div> */}

                // </>
        //     )
        //   })}
        
{/* <h1>this is Details compo</h1> */}


   {/* {id.category } */}














{/* {contextData.filter((item) => (item.category === dynamicImg) && (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)).slice(0, 3).map((element, index) => {
                        return (
                            <div key={index}>
                                <div className="dtltwo" >
                                <NavLink className='navlinktwo' to={`/details/${element.id}` }>
                                        <img src={element.image} alt="Not Found" className="detailsimage" />
                                    </NavLink>
                                    <h1 className="detaisheadingone">{element.name}</h1>
                                    <p className="detailsparaone" >{element.para.slice(0,150)}</p>
                                </div>
                            </div>
                        )
                    })} */}
// </>
//     )
// }



// export default DetailsCompo;
import { useEffect, useState} from "react"

import '../Css/Display.css'
import {  NavLink, useParams } from "react-router-dom"
import axios from "axios"
import FooterCompo from "./Footer"
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














  {/* <div key={index} className="underdiv_groceries"> */}
               {/* <img src={item.image} alt="Not Found"  className="all_images_groceries"/> */}
                    
                    {/* <div className="headingproduct"><p >{item.heading.slice(0,50)}</p>
                    </div> */}
                    {/* <span className="price">₹:{item.price}.00</span>
                    <h3 >{item.name}</h3>
                    <button className="btnaddcard">buy now</button> */}

                {/* </div> */}