import React from "react";
import { Button } from "reactstrap";

export default function Footer() {
    return(
    <footer className='d-flex flex-column text-center justify-content-md-center'>
        <h5>DO YOU WANT TO HEAR THE LATEST FOODS?</h5>
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <div className="input-group justify-content-center mt-2">
            <input type="email" />
            <Button color="danger" >SUBSCRIBED</Button>
        </div>
    </footer>
    )
}