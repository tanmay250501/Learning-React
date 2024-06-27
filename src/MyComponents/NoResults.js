import React from 'react';

const NoResults = () => {
  return (
    <div className="no-results-container">
      <div className="no-results-icon">&#128577;</div> {/* Sad face emoji */}
      <h2>No Results Found</h2>
      <p>Sorry, we couldn't find any matches for your search. Please try different keywords.</p>
    </div>
  );
};

export default NoResults;
