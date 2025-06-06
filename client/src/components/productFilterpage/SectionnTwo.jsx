import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../redux/filter.Slice";

const materials = [
    "18K Gold", "Platinum", "Rose Gold", "Sterling Silver", "Titanium",
    "White Gold", "Brass", "Zirconium", "Palladium"
];

const ringSizes = [5, 6, 7, 8, 9, 10, 11, 12];

const priceRanges = [
    "0-5000", "5001-10000", "10001-20000", "20001-50000", "50001+"
];

const discounts = ["5%", "10%", "15%", "20%", "25%", "30%"];

const genders = ["male", "female", "other"];

const SectionTwo = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filter);

    const handleCheckboxChange = (event, field) => {
        const { value } = event.target;
        dispatch(toggleFilter({ field, value }));
    };

    return <div className="container my-4">
        <p className="mb-3" style={{ color: "#4f3267" }}>Filter</p>
        <hr /><hr />
        <div className="g-4">
            <div>
                <label className="form-label fw-bold" style={{ color: "#4f3267" }}>Material</label>
                {
                    materials.map(mat =>
                        <div className="form-check" key={mat}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={mat}
                                checked={filters.material.includes(mat)}
                                onChange={(e) => handleCheckboxChange(e, "material")}
                            />
                            <label className="form-check-label">{mat}</label>
                        </div>
                    )}
            </div>
            <hr />
            <div>
                <label className="form-label fw-bold" style={{ color: "#4f3267" }}>Ring Size</label>
                {ringSizes.map(size =>
                    <div className="form-check" key={size}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={size}
                            checked={filters.ringSize.includes(size)}
                            onChange={(e) => handleCheckboxChange(e, "ringSize")}
                        />
                        <label className="form-check-label">{size}</label>
                    </div>
                )}
            </div>
            <hr />
            <div>
                <label className="form-label fw-bold" style={{ color: "#4f3267" }}>Price Range (₹)</label>
                {priceRanges.map(range =>
                    <div className="form-check" key={range}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={range}
                            checked={filters.priceRange.includes(range)}
                            onChange={(e) => handleCheckboxChange(e, "priceRange")}
                        />
                        <label className="form-check-label">₹{range}</label>
                    </div>
                )}
            </div>
            <hr />
            <div>
                <label className="form-label fw-bold" style={{ color: "#4f3267" }}>Discount</label>
                {discounts.map(d =>
                    <div className="form-check" key={d}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={d}
                            checked={filters.discount.includes(d)}
                            onChange={(e) => handleCheckboxChange(e, "discount")}
                        />
                        <label className="form-check-label">Upto {d} off on MRP</label>
                    </div>
                )}
            </div>
            <hr />
            <div>
                <label className="form-label fw-bold" style={{ color: "#4f3267" }}>Shop For</label>
                {genders.map(g =>
                    <div className="form-check" key={g}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={g}
                            checked={filters.shopFor.includes(g)}
                            onChange={(e) => handleCheckboxChange(e, "shopFor")}
                        />
                        <label className="form-check-label">{g}</label>
                    </div>
                )}
            </div>
        </div>
        <hr />
    </div>

};

export default SectionTwo;
