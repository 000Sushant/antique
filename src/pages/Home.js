import Spline from '@splinetool/react-spline';
import Hxample from './secpage';

const Home = () => {
    return(
        <div className='container-fluid py-4' style={{backgroundColor:"#BAABBE"}}>
        <div className='row text-center'>
            <div className='col-md-6' style={{height:"600px"}}>
                <Spline scene="https://prod.spline.design/pEbvqD5ZHt1YLJs8/scene.splinecode" />
            </div>
            <div className='col-md-6' style={{height:"600px",fontFamily:"Cairo Play"}}>
                {/* <h1 style={{lineHeight:"600px"}}  >The Antique Store</h1> */}
                <h1 style={{ fontSize: "5rem", lineHeight:"500px" }}  >The Antique Store</h1>
                
            </div>
            
        </div>
        <Hxample/>
        </div>
    );
}

export default Home;