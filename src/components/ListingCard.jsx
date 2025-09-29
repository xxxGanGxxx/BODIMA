import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { formatPrice } from "../data/listings.js";
import { useSavedListings } from "../context/SavedListingsContext.jsx";

function ListingCard({ listing }) {
  const { toggleSaved, isSaved } = useSavedListings();
  const saved = isSaved(listing.id);

  const locationSummary = `${listing.neighborhood}, ${listing.city}`;
  const reviewLabel = `${listing.reviewCount.toLocaleString()} reviews`;
  const priceDisplay = formatPrice(listing);

  const handleSaveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSaved(listing);
  };

  return (
    <article className="listing-card" aria-labelledby={`${listing.id}-title`}>
      <button
        type="button"
        className={`listing-card__save ${saved ? "is-saved" : ""}`}
        onClick={handleSaveClick}
        aria-pressed={saved}
        aria-label={saved ? "Remove from saved" : "Save listing"}
      >
        {saved ? <HeartSolid /> : <HeartOutline />}
      </button>

      <Link to={`/listing/${listing.id}`} className="listing-card__link">
        <div className="listing-card__media">
          <img
            src={listing.image}
            alt={`${listing.title} in ${locationSummary}`}
            className="listing-card__image"
            loading="lazy"
          />
        </div>

        <div className="listing-card__body">
          <h3 id={`${listing.id}-title`} className="listing-card__title">
            {listing.title}
          </h3>
          <p className="listing-card__location">{`${locationSummary}, ${listing.country}`}</p>

          <div className="listing-card__rating">
            <span className="listing-card__score" aria-label={`Rated ${listing.rating} out of 10`}>
              {listing.rating.toFixed(1)}
            </span>
            <div className="listing-card__rating-copy">
              <span>{listing.ratingLabel}</span>
              <span>{reviewLabel}</span>
            </div>
          </div>

          <p className="listing-card__price">
            Starting from <span>{priceDisplay}</span>
          </p>
        </div>
      </Link>
    </article>
  );
}

export default ListingCard;
