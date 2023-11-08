import { useEffect, useState } from "react"
import '../Css/Home.css'
import { NavLink } from "react-router-dom"


function GroceriesCompo(){
    const [data,setData]=useState([])

    useEffect (()=>{
        async function fetchapi (){
             const ffdata= await fetch ("http://localhost:4040/api/home")
             const res= await ffdata.json()

             setData(res)
            //  console.log(res)
        }
        fetchapi()
    })
    return(
        <>
         <div className="home_container">
        {data.filter((item)=>item.id===88).map((item,index)=>{
         return(
            <>
             <div key={index} className="underdiv_two_home">
             {/* <img src={item.images} alt="Not Found" className="premiumTop"/> */}
             <img src={item.imagess} alt="Not Found" className="topimage_home"/>
             </div>

             <div>
             
             </div>
             </>
         )
        })}
     </div>
      



        <div className="image_home_container">
          {data.map((item,index)=>{
            return(
                <>
                <div key={index} className="underdiv_home">
                 <NavLink to={`/details/${item.id}`}> <img src={item.image} alt="Not Found"  className="all_images_home"/></NavLink>  
                    <span className="price_home">₹:{item.price}.00</span>
                    <h3 className="title_home">{item.heading.slice(0,25)}</h3>
                    <button className="btnaddcard_home">buy now</button>

                </div>

                </>
            )
          })}

        </div>
       











        <div className="footermain_home">

<div className="logosdtl">
    <img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found" />
    <img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found" />
    <img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Not Found" />
    <img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found" />


    </div>
    <div className="location">  <img className="logoonedtl" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found" /></div> <span className="locdtl">Gurgaon Haryana</span>




    <img className="logoonephonedtl" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found" /><span className="phodtl">123467890</span>


    <img className="logoonemaildtl" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found" /><span className="emaildtl">balambisht467@gmail.com</span>


    <div className="gotonavdtl">
<p style={{color:'white', fontSize:'1.1em'}}>Click On This Link</p>

</div>
</div>
        </>
    )
}
export default GroceriesCompo