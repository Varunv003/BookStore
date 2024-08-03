import React from 'react'
import Slider from "react-slick";
import books from '../../public/books.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';


function FreeBook() {
    const list = books.filter((data) => data.category === 'Free')
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container my-20 mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Books</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quisquam eaque ad aut quam tempora quos dolorum sit aliquid eius asperiores quibusdam, explicabo nisi. Deserunt veritatis alias quae corrupti cum.</p>
                </div>


                <div>
                    <Slider {...settings}>
                        {list.map((item)=>(
                            <Cards item = {item} key = {item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook
