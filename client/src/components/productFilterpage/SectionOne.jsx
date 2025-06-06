import React, { useState, useEffect } from 'react';
import data from '../../data/ring.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/filter.Slice';

const SectionOne = () => {
    const dispatch = useDispatch()
    const [pagi, setPagi] = useState({ start: 0, limit: 12 });
    const filters = useSelector(state => state.filter);

    useEffect(() => {
        setPagi(prev => ({ ...prev, start: 0 }));
    }, [filters]);

    const filteredProducts = data.filter(item => {
        const materialMatch =
            filters.material.length === 0 || filters.material.includes(item.material);

        const ringSizeMatch =
            filters.ringSize.length === 0 || filters.ringSize.includes(item.ringSize);

        const priceMatch =
            filters.priceRange.length === 0 ||
            filters.priceRange.some(range => {
                const [min, max] = range.split('-');
                if (max) {
                    return item.price >= +min && item.price <= +max;
                } else {
                    return item.price >= +min;
                }
            });

        const discountMatch =
            filters.discount.length === 0 || filters.discount.includes(item.discount);

        const genderMatch =
            filters.shopFor.length === 0 || filters.shopFor.includes(item.shopFor);

        return materialMatch && ringSizeMatch && priceMatch && discountMatch && genderMatch;
    });

    const handleSortChange = (e) => {
        dispatch(setSortBy(e.target.value));
    };

    const sortedProducts = [...filteredProducts];

    switch (filters.sortBy) {
        case "price-asc":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "newest":
            sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        default:
            break;
    }
    const paginatedProducts = sortedProducts.slice(pagi.start, pagi.start + pagi.limit)


    return <div className="container my-4">
        <div className="mb-4 ">
            <label className="form-label fw-bold" style={{ color: "#4f3267" }}>Sort By</label>
            <select className="nav-link" onChange={handleSortChange}>
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
        <div className="row">
            {paginatedProducts.length > 0 ? paginatedProducts.map((item, index) => (
                <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card h-100 p-0 shadow-lg">
                        <div className="card-header">
                            <img className="img-fluid w-100" src={item.image} alt={item.name} />
                        </div>
                        <div className="card-body">
                            <p><strong>₹{item.price}/-</strong></p>
                            <p>{item.name}</p>
                            <p>Size: {item.ringSize}</p>
                            <p>Material: {item.material}</p>
                            <p>Discount: {item.discount}</p>
                            <p>For: {item.shopFor}</p>
                        </div>
                    </div>
                </div>
            )) : <p className="text-center text-muted">No products found</p>}
        </div>

        <div className="d-flex justify-content-center mt-4">
            {
                [...Array(Math.ceil(sortedProducts.length / pagi.limit))].map((_, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm ${pagi.start === i * pagi.limit ? "btn-primary" : "btn-outline-dark"} me-2`}
                        onClick={() => setPagi({ ...pagi, start: i * pagi.limit })}
                    >
                        {i + 1}
                    </button>
                ))
            }
        </div>
    </div>

};

export default SectionOne;
