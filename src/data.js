export const destinations = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    country: "India",
    category: "City",
    price: 4999,
    rating: 4.8,
    duration: "2 Days",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqq64CRF6Kp9zQHnfUT_O22BOG9v0XZPViL_C8K9UPXjB3Ewg__qIJAzy&s=10https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=900&q=80",
    description:
      "Discover historic monuments, vibrant markets, delicious biryani, and the rich heritage of Hyderabad.",
    attractions: [
      "Charminar",
      "Golconda Fort",
      "Hussain Sagar",
      "Ramoji Film City",
    ],
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    category: "Beach",
    price: 8999,
    rating: 4.9,
    duration: "3 Days",
    image:
      "https://t3.ftcdn.net/jpg/02/43/24/76/360_F_243247620_Clg6rXsX4K0lhPWip3oo9Oee28J30L23.jpg",
    description:
      "Enjoy beautiful beaches, spectacular sunsets, Portuguese architecture, and unforgettable coastal experiences.",
    attractions: [
      "Baga Beach",
      "Fort Aguada",
      "Basilica of Bom Jesus",
      "Dudhsagar Falls",
    ],
  },
  {
    id: "manali",
    name: "Manali",
    country: "India",
    category: "Mountain",
    price: 11999,
    rating: 4.8,
    duration: "4 Days",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0qPXLejDUMeVTE44MEgdCYGqap15yOPw8awlBOnNtYuol3ax1lg7lp4&s=10",
    description:
      "Experience snow-capped mountains, scenic valleys, adventure sports, and peaceful Himalayan landscapes.",
    attractions: [
      "Solang Valley",
      "Hadimba Temple",
      "Old Manali",
      "Rohtang Pass",
    ],
  },
  {
    id: "jaipur",
    name: "Jaipur",
    country: "India",
    category: "Heritage",
    price: 6999,
    rating: 4.7,
    duration: "2 Days",
    image:
      "https://jaipurbeat.wordpress.com/wp-content/uploads/2017/05/galta-gate.jpg",
    description:
      "Explore royal palaces, colourful bazaars, magnificent forts, and the famous Pink City architecture.",
    attractions: [
      "Hawa Mahal",
      "Amber Fort",
      "City Palace",
      "Jantar Mantar",
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    category: "Nature",
    price: 9999,
    rating: 4.9,
    duration: "3 Days",
    image:
      "https://thumbs.dreamstime.com/b/houseboat-kerala-backwaters-india-travel-tourism-background-panorama-tourist-60909324.jpg",
    description:
      "Relax among lush green hills, tranquil backwaters, tea plantations, and beautiful tropical scenery.",
    attractions: [
      "Alleppey Backwaters",
      "Munnar",
      "Kovalam Beach",
      "Thekkady",
    ],
  },
  {
    id: "agra",
    name: "Agra",
    country: "India",
    category: "Heritage",
    price: 5499,
    rating: 4.8,
    duration: "2 Days",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0KhlMQkkQoiBooyuWno71pm2sgiAgU9t8HHnt2lJr63dPYi67maWKZ9R&s=10",
    description:
      "Visit the iconic Taj Mahal and discover the architectural beauty and history of the Mughal Empire.",
    attractions: [
      "Taj Mahal",
      "Agra Fort",
      "Mehtab Bagh",
      "Fatehpur Sikri",
    ],
  },
];

export const packages = [
  {
    id: 1,
    name: "Goa Beach Escape",
    destination: "Goa",
    duration: "3 Days / 2 Nights",
    price: 8999,
    description:
      "A relaxing coastal holiday with beach visits and sunset experiences.",
  },
  {
    id: 2,
    name: "Manali Mountain Adventure",
    destination: "Manali",
    duration: "4 Days / 3 Nights",
    price: 11999,
    description:
      "Discover mountain landscapes, scenic valleys, and adventure activities.",
  },
  {
    id: 3,
    name: "Kerala Nature Retreat",
    destination: "Kerala",
    duration: "3 Days / 2 Nights",
    price: 9999,
    description:
      "Explore green landscapes, peaceful backwaters, and local culture.",
  },
];

export const hotels = [
  {
    id: 1,
    name: "The Grand Stay",
    location: "Hyderabad",
    rating: 4.5,
    price: 2499,
    category: "Premium",
  },
  {
    id: 2,
    name: "Ocean Breeze Resort",
    location: "Goa",
    rating: 4.8,
    price: 3999,
    category: "Resort",
  },
  {
    id: 3,
    name: "Mountain View Inn",
    location: "Manali",
    rating: 4.6,
    price: 2999,
    category: "Mountain Stay",
  },
];

export const articles = [
  {
    id: 1,
    title: "How to Plan Your Perfect Weekend Trip",
    category: "Travel Tips",
    description:
      "Learn how to choose a destination, plan your budget, and make the most of a short getaway.",
  },
  {
    id: 2,
    title: "Exploring India's Hidden Gems",
    category: "Destinations",
    description:
      "Discover beautiful places beyond the usual tourist destinations.",
  },
  {
    id: 3,
    title: "A Beginner's Guide to Smart Travel",
    category: "Travel Guide",
    description:
      "Simple tips for packing, transportation, accommodation, and travel planning.",
  },
];

export const foodGuides = [
  {
    id: 1,
    name: "Hyderabadi Biryani",
    location: "Hyderabad",
    description: "A fragrant rice dish featuring aromatic spices and rich flavours.",
    icon: "bi-egg-fried",
  },
  {
    id: 2,
    name: "Goan Fish Curry",
    location: "Goa",
    description: "A coastal speciality prepared with fish and coconut-based spices.",
    icon: "bi-cup-hot",
  },
  {
    id: 3,
    name: "Kerala Appam",
    location: "Kerala",
    description: "A soft, lacy rice pancake commonly served with curry.",
    icon: "bi-egg",
  },
  {
    id: 4,
    name: "Dal Baati Churma",
    location: "Jaipur",
    description: "A traditional Rajasthani meal combining baked baati, dal, and churma.",
    icon: "bi-basket",
  },
];