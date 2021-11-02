import React from 'react';
import { useSelector } from 'react-redux';

// IMPORT ASSET
import headerBand from '../../Assets/Images/headerBand.png';
import img1 from '../../Assets/Images/img1.png';
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import img5 from '../../Assets/Images/img5.png';
import footer from '../../Assets/Images/footer.png';

import CarouselHome from './Carousel';
import CustomCarousel from './CustomCarousel';

const Homepage = () => {
    const { searchVisible, catOne, catTwo } = useSelector(
        state => state.visibility
    );
    const { persona } = useSelector(state => state.selectedPersona);
    return (
        <>
            <div
                className={`homepage-wrapper ${
                    searchVisible || catOne || catTwo ? 'hidden' : 'active'
                }`}
            >
                {/* <div>
                <img src={headerBand} alt="home" />
            </div> */}
                <div>
                    <img src={img1} alt="home" />
                </div>
                <div className="carouselHome">
                    {persona === 'Asda_Tiffany' ? (
                        <h2>Our Organic Products :</h2>
                    ) : (
                        ''
                    )}
                    {persona === 'Asda_Ben' ? (
                        <h2>Our Kellogg's Products :</h2>
                    ) : (
                        ''
                    )}
                    <CarouselHome />
                </div>
                <div className="carouselHome">
                    <h2>Our Products less than 5£</h2>
                    <CustomCarousel />
                </div>
                <div>
                    <img src={img2} alt="home" />
                </div>
                <div>
                    <img src={img3} alt="home" />
                </div>
                <div>
                    <img src={img4} alt="home" />
                </div>
                <div>
                    <img src={img5} alt="home" />
                </div>
            </div>
            <div className="footer">
                <img src={footer} alt="home" />
            </div>
        </>
    );
};

export default Homepage;
