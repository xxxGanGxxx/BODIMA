import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSavedListings } from "../context/SavedListingsContext.jsx";

function ListingCard({ listing }) {
  const { toggleSaved, isSaved } = useSavedListings();
  const saved = isSaved(listing.id);

  const handleSaveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSaved(listing);
  };

  return (
    <Card className="explore-card">
      <button
        type="button"
        className={`explore-card__save ${saved ? "is-saved" : ""}`}
        onClick={handleSaveClick}
        aria-pressed={saved}
        aria-label={saved ? "Remove from saved" : "Save listing"}
      >
        {saved ? "Saved" : "Save"}
      </button>

      <div className="explore-card__media">
        <Card.Img
          variant="top"
          src={listing.image}
          alt={`${listing.title} - ${listing.location}`}
          className="explore-card__image"
        />
        <div className="explore-card__media-overlay">
          <span className="explore-card__badge">{listing.location}</span>
          <span className="explore-card__price-chip">{listing.price}</span>
        </div>
      </div>

      <Card.Body className="explore-card__body">
        <Card.Title className="explore-card__title">{listing.title}</Card.Title>
        <Card.Text className="explore-card__description">{listing.description}</Card.Text>
        <ul className="explore-card__facts" aria-label="Listing quick facts">
          <li>
            <span className="explore-card__fact-label">Beds</span>
            <span className="explore-card__fact-value">{listing.beds}</span>
          </li>
          <li>
            <span className="explore-card__fact-label">Baths</span>
            <span className="explore-card__fact-value">{listing.baths}</span>
          </li>
          <li>
            <span className="explore-card__fact-label">Area</span>
            <span className="explore-card__fact-value">{listing.area}</span>
          </li>
        </ul>
        <Button variant="primary" className="explore-card__cta">
          Call
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ListingCard;
