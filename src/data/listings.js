const LISTINGS = [
  {
    id: "apt-01",
    title: "Modern City Loft",
    description:
      "A bright open-plan loft with skyline views, ready for move-in with designer furnishings included.",
    city: "Colombo",
    neighborhood: "Colombo 05",
    country: "Sri Lanka",
    rating: 8.9,
    ratingLabel: "Excellent",
    reviewCount: 1243,
    priceCurrency: "LKR",
    pricePerNight: 35219,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    amenities: ["Skyline view", "Designer furnishings", "Workspace"],
  },
  {
    id: "apt-02",
    title: "Coastal Retreat",
    description:
      "Wake up to ocean breezes in this airy apartment minutes from the promenade and cafes.",
    city: "Mount Lavinia",
    neighborhood: "Sea Avenue",
    country: "Sri Lanka",
    rating: 8.8,
    ratingLabel: "Excellent",
    reviewCount: 980,
    priceCurrency: "LKR",
    pricePerNight: 40200,
    image:
      "https://images.unsplash.com/photo-1505692794403-55b39f1c0eb2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505692794403-55b39f1c0eb2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 3,
    baths: 2,
    area: "1,450 sq ft",
    amenities: ["Ocean view balcony", "Dedicated parking", "Chef's kitchen"],
  },
  {
    id: "apt-03",
    title: "Garden Residence",
    description:
      "Ground-floor suite with private garden access and a flexible workspace nook.",
    city: "Battaramulla",
    neighborhood: "Koswatta",
    country: "Sri Lanka",
    rating: 8.4,
    ratingLabel: "Very good",
    reviewCount: 742,
    priceCurrency: "LKR",
    pricePerNight: 28250,
    image:
      "https://images.unsplash.com/photo-1616594039964-73ece1f4cf69?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-73ece1f4cf69?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 2,
    baths: 2,
    area: "1,050 sq ft",
    amenities: ["Private garden", "Rain shower", "Workspace"],
  },
  {
    id: "apt-04",
    title: "Luxury Sky Villa",
    description:
      "Penthouse-style villa with dual balconies, smart home controls, and 24/7 concierge access.",
    city: "Colombo",
    neighborhood: "Colombo 07",
    country: "Sri Lanka",
    rating: 9.2,
    ratingLabel: "Wonderful",
    reviewCount: 1865,
    priceCurrency: "LKR",
    pricePerNight: 68900,
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 4,
    baths: 3,
    area: "2,300 sq ft",
    amenities: ["Smart home", "Concierge", "Dual balconies"],
  },
  {
    id: "apt-05",
    title: "Minimalist Studio",
    description:
      "Compact living with clever storage, ideal for young professionals seeking central access.",
    city: "Nugegoda",
    neighborhood: "Pagoda Road",
    country: "Sri Lanka",
    rating: 8.1,
    ratingLabel: "Very good",
    reviewCount: 512,
    priceCurrency: "LKR",
    pricePerNight: 18500,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 1,
    baths: 1,
    area: "650 sq ft",
    amenities: ["Built-in storage", "City access", "High-speed WiFi"],
  },
  {
    id: "apt-06",
    title: "Lakeview Duplex",
    description:
      "Two-level duplex with floor-to-ceiling windows framing peaceful lake vistas.",
    city: "Rajagiriya",
    neighborhood: "Lake Drive",
    country: "Sri Lanka",
    rating: 8.6,
    ratingLabel: "Excellent",
    reviewCount: 1105,
    priceCurrency: "LKR",
    pricePerNight: 41800,
    image:
      "https://images.unsplash.com/photo-1616594039964-4c24b4a74c94?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-4c24b4a74c94?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 3,
    baths: 3,
    area: "1,750 sq ft",
    amenities: ["Lake view", "Dual living areas", "Private gym"],
  },
  {
    id: "apt-07",
    title: "Skyline Executive Suite",
    description:
      "High-floor suite with vaulted ceilings, private study, and access to a resident sky lounge.",
    city: "Colombo",
    neighborhood: "Colombo 03",
    country: "Sri Lanka",
    rating: 9.0,
    ratingLabel: "Wonderful",
    reviewCount: 1540,
    priceCurrency: "LKR",
    pricePerNight: 53600,
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 3,
    baths: 3,
    area: "1,600 sq ft",
    amenities: ["Sky lounge", "Private study", "Butler service"],
  },
  {
    id: "apt-08",
    title: "Hillside Family Home",
    description:
      "Detached home near top schools featuring a play lawn, secure parking, and solar backup.",
    city: "Kandy",
    neighborhood: "Upper Lake Road",
    country: "Sri Lanka",
    rating: 8.5,
    ratingLabel: "Excellent",
    reviewCount: 875,
    priceCurrency: "LKR",
    pricePerNight: 47500,
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1600&q=80",
    ],
    beds: 4,
    baths: 3,
    area: "2,000 sq ft",
    amenities: ["Play lawn", "Secure parking", "Solar backup"],
  },
];

function formatPrice(listing) {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: listing.priceCurrency,
    maximumFractionDigits: 0,
  }).format(listing.pricePerNight);
}

function getListingById(id) {
  return LISTINGS.find((listing) => listing.id === id);
}

export { LISTINGS, formatPrice, getListingById };
