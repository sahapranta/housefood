import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faTruck, faHeart } from '@fortawesome/free-solid-svg-icons';
const FoodCard = () => {
    return (
        <div className="col-md-3 mb-5">
            <Card className="shadow">
                <CardImg top width="100%" src="https://via.placeholder.com/150x120" alt="Card image cap" />
                <div className="heart">
                    <FontAwesomeIcon icon={faHeart} color="red" />
                </div>
                <div className="px-3 mt-2">
                    <b>Food Salmon Fish</b>
                    <p className="price-info">
                        <FontAwesomeIcon icon={faStar} color="red" /> 49(200)
                        <FontAwesomeIcon icon={faClock} className="ml-2" /> 15-20
                        <FontAwesomeIcon icon={faTruck} className="ml-2" /> Delivery</p>
                    <div className="text-center p-3">
                        <Button className="card-btn-rounded" outline color="danger">Add to Cart</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FoodCard;