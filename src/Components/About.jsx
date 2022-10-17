import React from "react";
import FuncComp from './Home';
import '../Styles/Home.css';
class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                <div className="name ">
                <h3> About Us</h3>
                </div>
                <div className="about">
                    
            <p>In today’s digital era, no matter what your area of business is, a strong online presence can be your most important selling point. And when your industry is all about visual appeal, an online presence becomes even more important to convey your design style and get in new clients. 

            Interior designing is one such field filled with portfolio folders and samples. Interior design websites have become the driving force to reach out to a wider audience and create intrigue and higher visibility. An attractive visual presentation of your vision is another advantage of having an interior design website.</p>
            </div>
            <div className="locations">
                <h3>Our Locations</h3>
                
           <img src="https://media.istockphoto.com/vectors/delhi-architectural-symbol-indian-landmark-symbol-akshardham-delhi-vector-id494668924?k=6&m=494668924&s=170667a&w=0&h=6lqfy_h1as9HIw18-9AQPxWPUY3fPjObIP8Yom5HZyw=" height={300} width={280}></img>
           <img src="https://previews.123rf.com/images/koshenyamka/koshenyamka1601/koshenyamka160100014/50924746-india-gate-the-symbol-of-mumbai-india-vector-silhouette-icon-for-travel-agency-.jpg" height={300} width={280}></img>
           <img src="https://st2.depositphotos.com/3196551/8066/v/600/depositphotos_80664028-stock-illustration-bangalore-skyline-vector-illustration-linear.jpg" height={300} width={280}></img>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuyVlJp6ypMweJh1L3DKVUKYlgWR3vVxpvOemv8gEA_YJOtDw2Bop3KJ-Oi86nsDfA18&usqp=CAU" height={300} width={280}></img>
            </div>
            </div>
        )
    }
}




export default ClassComponent;