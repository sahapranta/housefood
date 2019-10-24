import React from 'react';
import FoodCard from './FoodCard';
import { Button } from "reactstrap";

export default function FoodDisplay(){
    return(
        <section className="my-4">
            <h4 className="mb-4">L<span className="red-underline">unch</span> & Dinner </h4>
            <div className="row">        
                {[...Array(8)].map((f, i) =>
                    <FoodCard key={i} />
                )}
            </div>
            <div className="text-center">
                <Button color="danger">Load More</Button>
            </div>
      </section>
    )
}