import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductStyle.css';

const productDetails = (props) => {
    var title=props.title;
    var priceclass=props.price >=600? "red":"green";
    
    return ( <div>
    <h2 style={{color:"purple"}} className="container">{title}</h2>
    <p className="container"><b >Price: </b><span className={priceclass}>{props.price}</span><button style={{marginLeft:"20px"}} onClick={()=>{
        props.onAddToCart(props.title);
    }}>Cart</button></p> 
    <p className="container" style={{color:"orange"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Blanditiis accusamus, asperiores molestias recusandae 
     itaque esse culpa ut eius dignissimos incidunt reiciendis, 
     delectus autem cupiditate quaerat ipsam nihil suscipit illum 
     doloremque?</p>
    
    <hr></hr>
    </div> );
}
 
export default productDetails;