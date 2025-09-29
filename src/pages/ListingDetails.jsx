import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { formatPrice, getListingById } from "../data/listings.js";
import { useSavedListings } from "../context/SavedListingsContext.jsx";

function ListingDetails() {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const { toggleSaved, isSaved } = useSavedListings();

  const listing = getListingById(listingId);

  if (!listing) {
    return <Navigate to="/explore" replace />;
  }

  const saved = isSaved(listing.id);
  const priceDisplay = formatPrice(listing);
  const locationSummary = `${listing.neighborhood}, ${listing.city}, ${listing.country}`;

  const handleBack = () => {
    navigate(-1, { replace: false });
  };

  const handleSaveToggle = () => {
    toggleSaved(listing);
  };

  return (
    <section className="listing-details" aria-labelledby="listing-details-title">
      <button type="button" className="listing-details__back" onClick={handleBack}>
        Back to results
      </button>

      <div className="listing-details__hero">
        <img
          src={listing.gallery[0] ?? listing.image}
          alt={`${listing.title} primary view`}
          className="listing-details__hero-image"
        />
        {listing.gallery.length > 1 && (
          <div className="listing-details__gallery" aria-label="Additional photos">
            {listing.gallery.slice(1).map((imageUrl, index) => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt={`${listing.title} alternate view ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>

      <div className="listing-details__header">
        <div>
          <h1 id="listing-details-title">{listing.title}</h1>
          <p className="listing-details__location">{locationSummary}</p>
        </div>
        <button
          type="button"
          className={`listing-details__save ${saved ? "is-saved" : ""}`}
          onClick={handleSaveToggle}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved" : "Save this stay"}
        >
          {saved ? <HeartSolid /> : <HeartOutline />}
          <span>{saved ? "Saved" : "Save"}</span>
        </button>
      </div>

      <div className="listing-details__meta" role="list">
        <div role="listitem">
          <span className="listing-details__meta-label">Rating</span>
          <span className="listing-details__meta-value">
            {listing.rating.toFixed(1)} | {listing.ratingLabel}
          </span>
        </div>
        <div role="listitem">
          <span className="listing-details__meta-label">Reviews</span>
          <span className="listing-details__meta-value">
            {listing.reviewCount.toLocaleString()}
          </span>
        </div>
        <div role="listitem">
          <span className="listing-details__meta-label">Layout</span>
          <span className="listing-details__meta-value">
            {listing.beds} beds | {listing.baths} baths | {listing.area}
          </span>
        </div>
        <div role="listitem">
          <span className="listing-details__meta-label">Starting from</span>
          <span className="listing-details__meta-value listing-details__meta-value--price">
            {priceDisplay} / night
          </span>
        </div>
      </div>

      <article className="listing-details__body">
        <h2>About this stay</h2>
        <p>{listing.description}</p>

        {listing.amenities?.length ? (
          <div className="listing-details__amenities">
            <h3>Amenities</h3>
            <ul>
              {listing.amenities.map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="listing-details__cta">
          <button type="button" className="listing-details__primary">
            Check availability
          </button>
          <button type="button" className="listing-details__secondary">
            Contact host
          </button>
        </div>
      </article>
    </section>
  );
}

export default ListingDetails;
