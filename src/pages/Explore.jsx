import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const listings = [
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
];

function Explore() {
  return (
    <section className="page" aria-labelledby="explore-title">
      <header className="page__header">
        <h1 id="explore-title">Explore Listings</h1>
        <p>
          Curated stays and long-term homes tailored for urban explorers, coastal dreamers, and
          families alike.
        </p>
      </header>

      <div className="explore-grid">
        {listings.map((listing) => (
          <Card key={listing.id} className="explore-card">
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
        ))}
      </div>
    </section>
  );
}

export default Explore;
