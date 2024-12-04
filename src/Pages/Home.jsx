import React from 'react';
import HeroSectionImage from '../assets/images/hero__image.png'
import PlaceHolderImage from '../assets/images/placeholder_image.svg'


const Home = () => {
  return (
    <div className='homepage__container'>
      <HeroSection />
    </div>
  )
}

export default Home


function HeroSection() {
  return (
    <>
      <div className='hero__section'>
        <div className='hero__section__text__container'>
          <div className='hero__section__text'>
            <p>----our bestsellers</p>
            <h2>Latest Arrivals</h2>
            <p>shop now----</p>
          </div>
        </div>

        <div className='hero__section__image__container'>
          <img src={PlaceHolderImage} alt="" />
        </div>
      </div>
    </>
  )
}

function CollectionBanner(){
  
  return (
    <div className='product__collection__section'>
      <h1 className='product__collection__section__heading'></h1>
      <p className='product__collection__section__description'></p>

      <div className='product__collection__product__card__container'>
        <div className='product__collection__card'>
          <div className=''>
            <img src="" alt=""/>
              <p></p>
          </div>
        </div>

      </div>


    </div>
  )
}