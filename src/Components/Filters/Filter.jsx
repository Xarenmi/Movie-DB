import DisplayCards from '../CardHandlers/DisplayCards.jsx';

export default Function Filters() {
    return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 className="" style={{ color: '#01b4e4', fontFamily: 'Impact', fontSize: '32px', marginLeft: '30px' }}>SELECTED MOVIES</h1>
            <div>
                <label htmlFor="filter" style={{ marginRight: '10px', color: '#01b4e4' }}>Filter:</label>
                <select id="filter" onChange={handleFilterChange} value={selectedFilter} style={{ color: '#01b4e4' }}>
                    <option value="">All</option>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★</option>
                    <option value="3">★★★</option>
                    <option value="2">★★</option>
                    <option value="1">★</option>
                </select>
            </div>
        </div>
        {selectedFilter ? (
            <DisplayCards latestMovies={genreMovies} selectedFilter={selectedFilter} />
        ) : (
            <DisplayCards latestMovies={genreMovies} />
        )}
    </div>
    );
};