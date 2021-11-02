import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';

// IMPORT COMPONENTS
import { CustomHitsModal } from '../Searchpage/Hits';

// IMPORT ASSETS
import quality from '../../Assets/Images/quality.png';
import energy from '../../Assets/Images/energy.png';
import add from '../../Assets/Images/add.png';
import { showModalPDP } from '../../actions/productDetail';

const ProductDetails = () => {
    const searchClient = algoliasearch(window.appID, window.key);
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.productDetail);

    if (product) {
        return (
            <div className="modal-inner-wrapper">
                <p
                    className="close-modal"
                    onClick={() => {
                        dispatch(showModalPDP(false));
                    }}
                >
                    X
                </p>
                <div className="modal-detail">
                    <div className="product-side">
                        <div className="modal-images">
                            <img src={product.IMAGE} alt="" />
                        </div>
                    </div>
                    <div className="fake-filters">
                        <div className="modal-infos">
                            <h3>{product.DISPLAY_NAME}</h3>
                            <div className="modal-infos__grame-prod">
                                <p className="modal-infos__grame-prod__gram">130g</p>
                                <p className="modal-infos__grame-prod__id">
                                    Product code: {product.PRODUCT_ID}
                                </p>
                            </div>
                            <div className="line"></div>
                            <img
                                className="modal-infos__grame-prod__img"
                                src={quality}
                                alt=""
                            />
                            <div className="line"></div>
                            <div className="modal-infos__grame-prod__prices">
                                <p className="modal-infos__grame-prod__prices__price">£{product.PRICE_INT}</p>
                                <img src={add} alt="" />
                            </div>
                            <div className="line"></div>
                            <img src={energy} alt="" />
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="recommand-side">
                    <div>
                        <h3>Recommandations</h3>
                    </div>
                    <div className="modal-hits">
                        <Configure hitsPerPage={8} />
                        <CustomHitsModal />
                    </div>
                    <div>
                        <h3>Bought together</h3>
                    </div>
                    <div className="modal-hits">
                        <InstantSearch
                            indexName={window.index_asc}
                            searchClient={searchClient}
                        >
                            <Configure hitsPerPage={8} />
                            <CustomHitsModal />
                        </InstantSearch>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductDetails;
