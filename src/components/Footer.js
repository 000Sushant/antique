import './Footer.css'

const Footer = () => {
    return (
    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Technology</h3>
                        <ul>
                            <li><a href="#">React Js</a></li>
                            <li><a href="#">Bootstrap</a></li>
                            <li><a href="#">Spline</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Team Members</h3>
                        <ul>
                            <li><a href="#">Sushant Kumar</a></li>
                            <li><a href="#">Akshat Sakharkar</a></li>
                            <li><a href="#">Rajat Rana</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>The Antique Store</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">The Antique Store © 2023</p>
            </div>
        </footer>
        <script src="../../public/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> */}
    </div>
    );
}

export default Footer;