import React, { useEffect } from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
function ProductScreen(props) {
    //console.log(props.match.params.id);
    //const product = data.products.find(x => x._id === props.match.params.id);

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };

    }, [])

    return <div>
        <div className="back-to-gallery">
            <Link to='/'>Back to gallery</Link>
        </div>
        {loading ? <div>Loading </div> :
            error ? <div>{error}</div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                                <li>
                                    Price: <b>${product.price}</b>
                                </li>
                                <li>
                                    Description:
                        <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: ${product.price}
                                </li>
                                <li>
                                    Status: ${product.status}
                                </li>
                                <li>
                                    Quantity: <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select>
                                </li>
                                <li>
                                    <button className="cartButton">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }
    </div>
}
export default ProductScreen;