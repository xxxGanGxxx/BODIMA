import { Link } from "react-router-dom";
import { useSavedListings } from "../context/SavedListingsContext.jsx";
import ListingCard from "../components/ListingCard.jsx";

function Saved() {
  const { savedListings } = useSavedListings();
  const hasSaved = savedListings.length > 0;

  return (
    <section className="page" aria-labelledby="saved-title">
      <header className="page__header">
        <h1 id="saved-title">Saved Stays</h1>
        <p>
          {hasSaved
            ? "Keep planning your trip - your favourite stays are waiting."
            : "You have no saved stays yet. Browse Explore and tap the heart to add your favourites."}
        </p>
      </header>

      {hasSaved ? (
        <div className="explore-grid">
          {savedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="saved-empty">
          <p>Nothing saved yet.</p>
          <Link className="saved-empty__cta" to="/explore">
            Start exploring now
          </Link>
        </div>
      )}
    </section>
  );
}

export default Saved;








