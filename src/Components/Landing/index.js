import React from 'react';
import { Button } from 'reactstrap';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';
import FoodCarousel from './FoodCarousel';
import ReviewCarousel from './ReviewCarousel';
import Footer from './Footer';
import OrderForm from './OrderForm';
import FoodSearch from './FoodSearch';
import FoodDisplay from './FoodDisplay';

function Landing() {
  return (
    <React.Fragment>
      <div className="clip"></div>
    <div className='container'>
      <Navbar />
      <section className='mt-5 ml-2'>
        <div className='row flex-column-reverse flex-md-row'>
          <div className='col-md-6 mt-5'>
            <h1 className='h1'>Choosing Quality <br/><span className='text-danger'>Foods</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsum dolores? Magnam, atque. Ut repellat, eos iusto dolorem perferendis dolorum nobis deserunt hic voluptate harum odit cupiditate repudiandae itaque doloremque?</p>
              <Button color="danger" className='mt-3 mb-3'>Order Now</Button>
              <p>Share with your friends</p>
              <span>
                <Button className="button-circle" outline color="danger">
                  <FontAwesomeIcon icon={faFacebook} />
                </Button>
                <Button className="button-circle" outline color="danger">
                <FontAwesomeIcon icon={faInstagram} />
                </Button>
                <Button className="button-circle" outline color="danger">
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
              </span>
          </div>
          <div className='col-md-6'>
            <FoodCarousel />
          </div>
        </div>
      </section>
      <FoodSearch />
      <FoodDisplay />
      <OrderForm />
      <section className="my-5 reviews">
        <h4 className="mb-4">C<span className="red-underline">usto</span>mer Review</h4>
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <ReviewCarousel />
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </React.Fragment>
  );
}

export default Landing;
