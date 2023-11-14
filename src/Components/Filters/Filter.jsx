import React from 'react';
import "./Filter.css";

function Filter({ onFilterChange, selectedFilter }) {
    return (
        <div>
            <label htmlFor="filter" className="filter-label">Filter:</label>
            <select id="filter" onChange={onFilterChange} value={selectedFilter} style={{ color: '#01b4e4' }}>
                <option value="">All</option>
                <option value="5">★★★★★</option>
                <option value="4">★★★★</option>
                <option value="3">★★★</option>
                <option value="2">★★</option>
                <option value="1">★</option>
            </select>
        </div>
    );
}

export default Filter;
