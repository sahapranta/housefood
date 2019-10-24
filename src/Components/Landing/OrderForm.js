import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function OrderForm() {
  const [state, setState] = useState({portion:2, range:0.5, image:[]});

  const increaseRange = (e)=>{
    setState({ range: e.target.value});    
  }

  const setImage = (e)=>{
    setState({ image: [...state.image, e.target.files]});
    console.log(state.image);
  }

  const increasePortion = () => {
    const newValue = state.portion + 1;
    setState({ portion: newValue});
  }
  const decreasePortion = () => {
    if (state.portion > 0) {
    const newValue = state.portion - 1;
    setState({ portion: newValue});
    }
  }

    return (
        <section>
        <h4 className="mb-4">P<span className="red-underline">ost C</span>ustom Order</h4>
        <div className="row justify-content-md-center">
          <Col md={6}>
            <Form>
              <FormGroup>
                <Label for="name">Name of your Food</Label>
                <Input type="text" placeholder="Salmon Fish" />
              </FormGroup>
              <FormGroup>
                <Label for="desc">Food Description</Label>
                <textarea className="form-control" rows="8" defaultValue="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, corporis nesciunt, obcaecati laudantium est veritatis quo molestias praesentium quod id, nobis odit? Blanditiis et fuga animi praesentium error, ipsa sit?"/>
              </FormGroup>
              <FormGroup>
                <Label for="desc">Upload your Picture</Label>
                <div className="image-upload">
                  <img src="https://via.placeholder.com/60x50" alt="img" />
                  <img src="https://via.placeholder.com/60x50" alt="img" />
                  <img src="https://via.placeholder.com/60x50" alt="img" />
                  <Button >Upload Image</Button><input type="file"  onChange={setImage} multiple defaultValue="" />
                </div>
              </FormGroup>
              <FormGroup className="d-flex">
                <Label> <span className="text-danger">Portion:</span> It's estimated 1,100 lbs for plate</Label>
                <div className="ml-auto">
                  <Button className="button-circle-sm button-circle" onClick={decreasePortion}>
                    <FontAwesomeIcon icon={faMinus}/>
                  </Button>
                  <b className="pl-2"> {state.portion}</b>
                  <Button className="button-circle-sm button-circle" color="success" onClick={increasePortion}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </div>
              </FormGroup>
              <FormGroup>
                  <div className="range">
                    <input type="range" className="slider" onChange={increaseRange} min="0.5" step="0.5" max="5" value={state.range}/>
                  </div>
                  <div className="d-flex">
                    <Label>Select find a chef mi</Label>
                    <p className="ml-auto">{state.range} mi</p>
                  </div>
              </FormGroup>
              <FormGroup>
                <div className="text-center mt-5">
                  <button className="post-btn">Post Order</button>
                </div>
              </FormGroup>
            </Form>
          </Col>
        </div>
      </section>
    )
}