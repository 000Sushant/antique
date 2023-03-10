//import Stack from 'react-bootstrap/Stack';
// import Spline from '@splinetool/react-spline';
import { Outlet, Link } from "react-router-dom"
const Hxample = () => {
  return (
    <div className="bg-light py-2">
    <div className="container my-4 ">
    <div class="row text-center">
        <h1 className="text-center" style={{fontFamily:"Cairo Play",textDecoration:"underline"}}>Rare items</h1>
        <div class="col-sm-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src={require("../images/items/i5.png")} height="350px"  class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Handmade Artwork</h5>
                    <p class="card-text">Limited Edtion Artwork by Lawren jeen</p>
                    <Link to='/item' class="btn btn-dark">Know More</Link>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src={require("../images/items/i6.png")} height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Handmade Sculpture</h5>
                    <p class="card-text">Limited Edition painting by Jaune Loice</p>
                    <Link to='/item2' class="btn btn-dark">Know More</Link>

                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src={require("../images/items/i3.png")} height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Handmade Sculpture</h5>
                    <p class="card-text">Limited Edition Sculpture by Andrias Rain</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src={require("../images/items/i4.png")} height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Handmade Oil Painting</h5>
                    <p class="card-text">Rare Oil Painting in 18th Century</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://images.unsplash.com/photo-1606241018160-4985a8ab5dec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Mirror of Snow White</h5>
                    <p class="card-text">Mystical Mirror</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>


        <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Saxopone</h5>
                    <p class="card-text">Limited Edition Saxophone by Chewangsa Rain</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>

        <h1 className="text-center mt-4" style={{fontFamily:"Cairo Play",textDecoration:"underline"}}>imported items</h1>

        <div class="col-sm-4 mt-2">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://images.unsplash.com/photo-1604125884462-125b077cd0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Antique Camera</h5>
                    <p class="card-text">From te collection of Rajat Rana</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-2">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://cdn.pixabay.com/photo/2020/10/04/16/07/typewriter-5626841_960_720.jpg" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Typewriter</h5>
                    <p class="card-text">Limited Edition Typewriter by Sushant Kumar</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-2">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_960_720.jpg" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title"> Engine Car</h5>
                    <p class="card-text"> By Stong Konlong</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://cdn.pixabay.com/photo/2017/02/03/22/41/pocket-watch-2036309_960_720.jpg" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Antique Watch</h5>
                    <p class="card-text">Made with pure Celestial Mateials</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://cdn.pixabay.com/photo/2019/10/08/16/01/lamp-4535320_960_720.jpg" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Wall Lamp</h5>
                    <p class="card-text">Used in almost Every Castle</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_960_720.jpg" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">First Modern Car of 20th Century</h5>
                    <p class="card-text">Owned by Akshat Sakharkar</p>
                    <button href="#" class="btn btn-dark" disabled>Know More</button>
                </div>
            </div>
        </div>
        {/* <div class="col-sm-4 mt-4">
            <div class="card border border-dark border-2" style={{backgroundColor:"#BAABBE"}}>
                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147_960_720.jpg" height="350px" class="card-img-top" alt="car"/>
                <div class="card-body">
                    <h5 class="card-title">Handmade Pots from China</h5>
                    <p class="card-text">Versatile pots from hand of Rajat Rana</p>
                    <a href="#" class="btn btn-dark">Know More</a>
                </div>
            </div>
        </div> */}
        
    </div>
    </div>
    </div>
  );
}

export default Hxample;

