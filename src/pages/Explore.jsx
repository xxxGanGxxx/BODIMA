import { useMemo, useState } from "react";
import ListingCard from "../components/ListingCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { LISTINGS } from "../data/listings.js";

const DEFAULT_FILTERS = {
  destination: "",
  checkIn: "",
  checkOut: "",
  adults: 2,
  children: 0,
  rooms: 1,
};

function Explore() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [filteredListings, setFilteredListings] = useState(LISTINGS);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFiltersChange = (nextFilters) => {
    setFilters(nextFilters);
  };

  const handleSearch = () => {
    const destinationQuery = filters.destination.trim().toLowerCase();
    const totalGuests = filters.adults + filters.children;

    const nextListings = LISTINGS.filter((listing) => {
      const locationTokens = [listing.neighborhood, listing.city, listing.country, listing.title]
        .join(" ")
        .toLowerCase();

      const matchesDestination =
        destinationQuery.length === 0 || locationTokens.includes(destinationQuery);

      const meetsGuestCount =
        totalGuests === 0 ? true : listing.beds * 2 >= totalGuests;

      const meetsRoomCount = listing.beds >= filters.rooms;

      return matchesDestination && meetsGuestCount && meetsRoomCount;
    });

    setHasSearched(true);
    setFilteredListings(nextListings);
  };

  const showEmptyState = hasSearched && filteredListings.length === 0;

  const totalResultsLabel = useMemo(() => {
    if (showEmptyState) {
      return "No stays found";
    }

    return `${filteredListings.length} curated stays`;
  }, [filteredListings.length, showEmptyState]);

  return (
    <section className="page" aria-labelledby="explore-title">
      <header className="page__header">
        <h1 id="explore-title">Explore Listings</h1>
        <p>
          Discover curated long-stay rentals across Sri Lanka. Filter by destination and group size to find a stay that fits.
        </p>
        <SearchBar
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onSearch={handleSearch}
        />
        <span className="explore-results-count" role="status">
          {totalResultsLabel}
        </span>
      </header>

      {showEmptyState ? (
        <p className="explore-empty" role="status">
          No listings matched your search. Try broadening your destination or reducing the group size.
        </p>
      ) : (
        <div className="explore-grid">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Explore;
