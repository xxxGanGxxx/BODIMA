import ListingCard from "../components/ListingCard.jsx";
import { useSavedListings } from "../context/SavedListingsContext.jsx";

function Saved() {
  const { savedListings } = useSavedListings();
  const hasSavedListings = savedListings.length > 0;

  return (
    <section className="page" aria-labelledby="saved-title">
      <header className="page__header">
        <h1 id="saved-title">Saved Homes</h1>
        <p>
          Your bookmarked listings live here so you can revisit or share them whenever you are ready.
        </p>
      </header>

      {hasSavedListings ? (
        <div className="explore-grid" role="list">
          {savedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <p role="status">You haven't saved any homes yet. Tap the Save button on a listing to add it here.</p>
      )}
    </section>
  );
}

export default Saved;
