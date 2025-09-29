import { useState } from "react";
import ListingCard from "../components/ListingCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

const LISTINGS = [
  {
    id: "apt-01",
    title: "Modern City Loft",
    description:
      "A bright open-plan loft with skyline views, ready for move-in with designer furnishings included.",
    location: "Colombo 05",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    price: "LKR 180,000/mo",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-02",
    title: "Coastal Retreat",
    description:
      "Wake up to ocean breezes in this airy apartment minutes from the promenade and cafes.",
    location: "Mount Lavinia",
    beds: 3,
    baths: 2,
    area: "1,450 sq ft",
    price: "LKR 210,000/mo",
    image:
      "https://images.unsplash.com/photo-1505692794403-55b39f1c0eb2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-03",
    title: "Garden Residence",
    description:
      "Ground-floor suite with private garden access and a flexible workspace nook.",
    location: "Battaramulla",
    beds: 2,
    baths: 2,
    area: "1,050 sq ft",
    price: "LKR 165,000/mo",
    image:
      "https://images.unsplash.com/photo-1616594039964-73ece1f4cf69?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-04",
    title: "Luxury Sky Villa",
    description:
      "Penthouse-style villa with dual balconies, smart home controls, and 24/7 concierge access.",
    location: "Colombo 07",
    beds: 4,
    baths: 3,
    area: "2,300 sq ft",
    price: "LKR 420,000/mo",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-05",
    title: "Minimalist Studio",
    description:
      "Compact living with clever storage, ideal for young professionals seeking central access.",
    location: "Nugegoda",
    beds: 1,
    baths: 1,
    area: "650 sq ft",
    price: "LKR 95,000/mo",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-06",
    title: "Lakeview Duplex",
    description:
      "Two-level duplex with floor-to-ceiling windows framing peaceful lake vistas.",
    location: "Rajagiriya",
    beds: 3,
    baths: 3,
    area: "1,750 sq ft",
    price: "LKR 240,000/mo",
    image:
      "https://images.unsplash.com/photo-1616594039964-4c24b4a74c94?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-07",
    title: "Skyline Executive Suite",
    description:
      "High-floor suite with vaulted ceilings, private study, and access to a resident sky lounge.",
    location: "Colombo 03",
    beds: 3,
    baths: 3,
    area: "1,600 sq ft",
    price: "LKR 320,000/mo",
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apt-08",
    title: "Hillside Family Home",
    description:
      "Detached home near top schools featuring a play lawn, secure parking, and solar backup.",
    location: "Kandy",
    beds: 4,
    baths: 3,
    area: "2,000 sq ft",
    price: "LKR 275,000/mo",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
  },
];

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
      const matchesDestination =
        destinationQuery.length === 0 ||
        `${listing.location} ${listing.title}`.toLowerCase().includes(destinationQuery);

      const meetsGuestCount =
        totalGuests === 0 ? true : listing.beds * 2 >= totalGuests;

      const meetsRoomCount = listing.beds >= filters.rooms;

      return matchesDestination && meetsGuestCount && meetsRoomCount;
    });

    setHasSearched(true);
    setFilteredListings(nextListings);
  };

  const showEmptyState = hasSearched && filteredListings.length === 0;

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
