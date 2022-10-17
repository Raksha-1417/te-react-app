import React from "react";
import '../Styles/Home.css';
function FunctionalComponents() {
    return (
       
            <FunctionalComponent1></FunctionalComponent1>
       
    )
}

//React Fragments


const FunctionalComponent1 = () => {
    return (
        <React.Fragment>
            <h1 >Welcome to Interior Designs</h1>

            <div className="para">
                <h2>Interior Designs</h2>
                <p className="text">Interior design is the science of understanding behaviors to help property owners create a functional room within a building, including the shapes of a room's walls, floors, and more. A professional interior designer must understand interior architecture and works closely with architects to design the interior space.</p>
                <img src="https://www.vrist.in/blog/wp-content/uploads/2019/10/FY20-Website-Update-July-2019-CADENCE.jpg" height={450} width={1225}></img>
              
              
            </div>
            <div className="container">
            <h2>Room Interior Designs</h2>
                <div className="row">

                    <div className="col-sm">
                        <div class="card">
                            <img src="https://assets.architecturaldigest.in/photos/600844ae51daf9662c149651/4:3/w_1024,h_768,c_limit/Mumbai-2-bhk-nordic-interior-design-1366x768.jpg" height={250} width={270}></img>
                            <div class="card-body">
                                <h5 class="card-title">Hall Interior Design</h5>
                                <p class="card-text">
                                Pastel hues, clean design and minimalist decor breathe a Nordic air in this home.We made sure to maintain maximum natural light and subtle, monochromatic colours. This would keep the house free-flowing, light-filled and easy on the eye.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card">
                            <img src="https://www.vaishnaviinteriors.in/images/gallery/design-3.jpeg" height={250} width={270}></img>
                            <div class="card-body">
                                <h5 class="card-title">Room Interior Design</h5>
                                <p class="card-text">
                                Pastel hues, clean design and minimalist decor breathe a Nordic air in this home.We made sure to maintain maximum natural light and subtle, monochromatic colours. This would keep the house free-flowing, light-filled and easy on the eye.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm">
                        <div class="card">
                            <img src="https://assets.architecturaldigest.in/photos/600844ae51daf9662c149651/4:3/w_1024,h_768,c_limit/Mumbai-2-bhk-nordic-interior-design-1366x768.jpg" height={250} width={270}></img>
                            <div class="card-body">
                                <h5 class="card-title">Hall Interior Design</h5>
                                <p class="card-text">
                                Pastel hues, clean design and minimalist decor breathe a Nordic air in this home.We made sure to maintain maximum natural light and subtle, monochromatic colours. This would keep the house free-flowing, light-filled and easy on the eye.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

//only one export
export default FunctionalComponents;