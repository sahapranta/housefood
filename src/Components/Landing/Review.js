import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Review (){
    return (
        <div className="review">
          <div className="review-text px-4 pb-5 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Provident, necessitatibus. Aliquam adipisci molestiae perspiciatis nostrum delectus ea, magnam error. Itaque maiores eligendi sint autem laudantium totam minus veniam.            
          </div>
          <div className="text-center thumb">            
              <img src="img/man.png" className="img-thumbnail" alt="man"/>            
              <div className="ratings mb-2">
                <FontAwesomeIcon icon={faStar} color="orange"/> 
                <FontAwesomeIcon icon={faStar} color="orange"/> 
                <FontAwesomeIcon icon={faStar} color="orange"/> 
                <FontAwesomeIcon icon={faStar} color="orange"/> 
                <FontAwesomeIcon icon={faStar} color="orange"/>                 
              </div>
            <b>Jhon Smith</b>
            <p><small>22 years</small></p>
          </div>
        </div>
    );
}
