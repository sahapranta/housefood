import React from 'react';
import mouse from './mouse.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function FoodSearch(){
    return(
        <section className="pt-5">
        <div className="text-center mb-4">
          <img src={mouse} alt="mouse" width="30"/>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control find shadow mb-4" placeholder="Find a Food or a Resturant"/>
                <div className="feedback">
                  <FontAwesomeIcon icon={faSearch} color='red' />
                </div>
            </div>
          </div>
        </div>        
      </section>
    )
}