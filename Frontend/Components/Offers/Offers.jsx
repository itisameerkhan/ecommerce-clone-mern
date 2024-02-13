import './Offers.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { offers_img } from '../../utils/constants';

const Offers = () => {
  return (
    <div className="offers">
        <h1 className="sub-heading">Best Deals on Top Brands</h1>
        <div className="offers-inner">
            <Splide options={{
                perPage:1,
                pagination: true,
                arrows: false,
                autoplay:true,
                interval: 2000,
                type:'loop',
                pauseOnHover: false
            }}>
                {offers_img.map((data, index) => (
                    <SplideSlide key={index}>
                        <img src={data} alt="img" className='offer-img' />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    </div>
  )
}

export default Offers