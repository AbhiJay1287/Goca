import React from 'react'
// import img1 from '../assets/30247.jpg'
// import img2 from '../assets/AG.png'
// import img3 from '../assets/background_tech.jpg'
// import img4 from '../assets/img1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/Carousal.css'

const Carousal = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1000">
                
                <div className="carousel-inner">
                <div className='carousel-caption' style={{zIndex:"2"}}>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </div>
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/1024/1024?random=1" className="d-block w-100" alt="..." style={{ filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1024/1024?random=2" className="d-block w-100" alt="..." style={{ filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1024/1024?random=3" className="d-block w-100" alt="..." style={{ filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1024/1024?random=4" className="d-block w-100" alt="..." style={{ filter: "brightness(40%)" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousal