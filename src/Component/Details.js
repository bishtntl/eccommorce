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
import '../Css/Fashion.css'
import {  useParams } from "react-router-dom"
import axios from "axios"
function DetailsCompo(){
    const [data,setData]=useState([])



const {id}=useParams()
const newid=parseInt(id)


    useEffect (()=>{
        
           
           axios.get("http://localhost:4040/api/fashiondatas/")
                .then((res)=>setData(res.data))
                .catch((err)=>{
                    console.log("error")})              
            
            
       
    },[id])
    return(
        <>
       {data.filter((item)=>item.id===newid).map((item,index)=>{
        return(
            <div key={index}>
                <img src={item.image}/>
            </div>
        )
       })}
        
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