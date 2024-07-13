import image1 from "./imgs/image1.png";
import image2 from "./imgs/image2.png";
import image3 from "./imgs/image3.png";
import image4 from "./imgs/image4.png";
import image5 from "./imgs/image5.png";
import image6 from "./imgs/image6.png";
import image7 from "./imgs/image7.png";
import image8 from "./imgs/image8.png";
import image10 from "./imgs/image10.png";
import image11 from "./imgs/image11.png";
import image12 from "./imgs/image12.png";
import image13 from "./imgs/image13.png";
import image14 from "./imgs/image14.png";
import image15 from "./imgs/image15.png";
import image16 from "./imgs/image16.png";
import image17 from "./imgs/image17.png";
import image18 from "./imgs/image18.png";
import image19 from "./imgs/image19.png";

export const events = [
  {
    id:"1",
    type: "Workshop",
    subCategory: "Plogging",
    name: "Beach Cleanup",
    description: "Join us for a fun and eco-friendly beach cleanup workshop.",
    price: 0,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-770-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image18, image19],
    tags: ["Environment", "Cleanup"],
    organizer: [
      {
        name: "Green Earth",
        contact: "+213-770-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "10:00 AM",
        activityDescription: "Cleanup Starts",
        place: {
          address: "Beach Road",
          city: "Algiers",
          state: "Algiers",
          country: "Algeria",
          coordinates: {
            lat: "36.737232",
            lng: "3.086472",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {    
    id:"2",
    type: "Activity",
    subCategory: "Themed Resto",
    name: "Medieval Feast",
    description: "Experience a medieval-themed dinner with live performances.",
    price: 30,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://reservations.example.com",
      phoneNumber: "+213-771-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image17],
    tags: ["Food", "Entertainment"],
    organizer: [
      {
        name: "Epicurean Delights",
        contact: "+213-771-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "07:00 PM",
        activityDescription: "Dinner Begins",
        place: {
          address: "Old Town",
          city: "Oran",
          state: "Oran",
          country: "Algeria",
          coordinates: {
            lat: "35.69707",
            lng: "-0.64167",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: false,
  },
  {
    id:"3",
    type: "Activity",
    subCategory: "Gameplace",
    name: "Escape Room Challenge",
    description: "Solve puzzles and escape the room in this exciting game.",
    price: 15,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://escaperooms.example.com",
      phoneNumber: "+213-772-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image16],
    tags: ["Games", "Puzzle"],
    organizer: [
      {
        name: "Mystery Rooms",
        contact: "+213-772-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "02:00 PM",
        activityDescription: "Game Starts",
        place: {
          address: "Game Street",
          city: "Constantine",
          state: "Constantine",
          country: "Algeria",
          coordinates: {
            lat: "36.365",
            lng: "6.6147",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"4",
    type: "Event",
    subCategory: "Concert",
    name: "Rock Concert",
    description: "Join us for an electrifying night of rock music.",
    price: 50,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://concerts.example.com",
      phoneNumber: "+213-773-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image15],
    tags: ["Music", "Rock"],
    organizer: [
      {
        name: "Live Nation",
        contact: "+213-773-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 PM",
        activityDescription: "Concert Begins",
        place: {
          address: "Concert Hall",
          city: "Annaba",
          state: "Annaba",
          country: "Algeria",
          coordinates: {
            lat: "36.9",
            lng: "7.7667",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"5",
    type: "Trip",
    subCategory: "Other",
    name: "Desert Safari",
    description:
      "Explore the stunning Sahara Desert on this exciting safari trip.",
    price: 200,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://safaris.example.com",
      phoneNumber: "+213-774-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image14],
    tags: ["Adventure", "Nature"],
    organizer: [
      {
        name: "Desert Adventures",
        contact: "+213-774-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 AM",
        activityDescription: "Safari Starts",
        place: {
          address: "Desert Camp",
          city: "Tamanrasset",
          state: "Tamanrasset",
          country: "Algeria",
          coordinates: {
            lat: "22.785",
            lng: "5.5228",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: false,
  },

  {
    id:"6",
    type: "Workshop",
    subCategory: "Other",
    name: "Pottery Class",
    description: "Learn the art of pottery in this hands-on workshop.",
    price: 25,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://potteryclasses.example.com",
      phoneNumber: "+213-775-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image13],
    tags: ["Art", "Craft"],
    organizer: [
      {
        name: "Artisans Guild",
        contact: "+213-775-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "09:00 AM",
        activityDescription: "Workshop Starts",
        place: {
          address: "Art Center",
          city: "Batna",
          state: "Batna",
          country: "Algeria",
          coordinates: {
            lat: "35.5556",
            lng: "6.1744",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"7",
    type: "Activity",
    subCategory: "Karaoke",
    name: "Karaoke Night",
    description: "Show off your singing skills at our weekly karaoke night.",
    price: 10,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-776-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image12],
    tags: ["Music", "Fun"],
    organizer: [
      {
        name: "SingStar Club",
        contact: "+213-776-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 PM",
        activityDescription: "Karaoke Starts",
        place: {
          address: "Main Street",
          city: "Setif",
          state: "Setif",
          country: "Algeria",
          coordinates: {
            lat: "36.1911",
            lng: "5.4137",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"8",
    type: "Event",
    subCategory: "Other",
    name: "Book Fair",
    description: "Discover new books and meet authors at our annual book fair.",
    price: 5,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-777-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image11],
    tags: ["Books", "Literature"],
    organizer: [
      {
        name: "Book Lovers Club",
        contact: "+213-777-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "10:00 AM",
        activityDescription: "Fair Opens",
        place: {
          address: "Expo Center",
          city: "Bejaia",
          state: "Bejaia",
          country: "Algeria",
          coordinates: {
            lat: "36.75",
            lng: "5.0833",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"9",
    type: "Trip",
    subCategory: "Other",
    name: "Mountain Hiking",
    description: "Join us for a thrilling hike through the mountains.",
    price: 50,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://hikingtrips.example.com",
      phoneNumber: "+213-778-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image10],
    tags: ["Adventure", "Nature"],
    organizer: [
      {
        name: "Mountain Explorers",
        contact: "+213-778-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "06:00 AM",
        activityDescription: "Hike Starts",
        place: {
          address: "Mountain Base",
          city: "Tizi Ouzou",
          state: "Tizi Ouzou",
          country: "Algeria",
          coordinates: {
            lat: "36.7169",
            lng: "4.0497",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: false,
  },
  {
    id:"10",
    type: "Activity",
    subCategory: "Cinema",
    name: "Outdoor Movie Night",
    description: "Enjoy a classic movie under the stars.",
    price: 8,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-779-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image8],
    tags: ["Movies", "Outdoor"],
    organizer: [
      {
        name: "Cinema Club",
        contact: "+213-779-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 PM",
        activityDescription: "Movie Starts",
        place: {
          address: "Park Avenue",
          city: "Skikda",
          state: "Skikda",
          country: "Algeria",
          coordinates: {
            lat: "36.8662",
            lng: "6.9066",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },

  {
    id:"11",
    type: "Workshop",
    subCategory: "Other",
    name: "Pottery Class",
    description: "Learn the art of pottery in this hands-on workshop.",
    price: 25,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://potteryclasses.example.com",
      phoneNumber: "+213-775-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image13],
    tags: ["Art", "Craft"],
    organizer: [
      {
        name: "Artisans Guild",
        contact: "+213-775-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "09:00 AM",
        activityDescription: "Workshop Starts",
        place: {
          address: "Art Center",
          city: "Batna",
          state: "Batna",
          country: "Algeria",
          coordinates: {
            lat: "35.5556",
            lng: "6.1744",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"12",
    type: "Activity",
    subCategory: "Karaoke",
    name: "Karaoke Night",
    description: "Show off your singing skills at our weekly karaoke night.",
    price: 10,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-776-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image12],
    tags: ["Music", "Fun"],
    organizer: [
      {
        name: "SingStar Club",
        contact: "+213-776-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 PM",
        activityDescription: "Karaoke Starts",
        place: {
          address: "Main Street",
          city: "Setif",
          state: "Setif",
          country: "Algeria",
          coordinates: {
            lat: "36.1911",
            lng: "5.4137",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"13",
    type: "Event",
    subCategory: "Other",
    name: "Book Fair",
    description: "Discover new books and meet authors at our annual book fair.",
    price: 5,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-777-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image11],
    tags: ["Books", "Literature"],
    organizer: [
      {
        name: "Book Lovers Club",
        contact: "+213-777-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "10:00 AM",
        activityDescription: "Fair Opens",
        place: {
          address: "Expo Center",
          city: "Bejaia",
          state: "Bejaia",
          country: "Algeria",
          coordinates: {
            lat: "36.75",
            lng: "5.0833",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"14",
    type: "Trip",
    subCategory: "Other",
    name: "Mountain Hiking",
    description: "Join us for a thrilling hike through the mountains.",
    price: 50,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://hikingtrips.example.com",
      phoneNumber: "+213-778-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image10],
    tags: ["Adventure", "Nature"],
    organizer: [
      {
        name: "Mountain Explorers",
        contact: "+213-778-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "06:00 AM",
        activityDescription: "Hike Starts",
        place: {
          address: "Mountain Base",
          city: "Tizi Ouzou",
          state: "Tizi Ouzou",
          country: "Algeria",
          coordinates: {
            lat: "36.7169",
            lng: "4.0497",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: false,
  },
  {
    id:"15",
    type: "Activity",
    subCategory: "Cinema",
    name: "Outdoor Movie Night",
    description: "Enjoy a classic movie under the stars.",
    price: 8,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-779-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image8],
    tags: ["Movies", "Outdoor"],
    organizer: [
      {
        name: "Cinema Club",
        contact: "+213-779-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 PM",
        activityDescription: "Movie Starts",
        place: {
          address: "Park Avenue",
          city: "Skikda",
          state: "Skikda",
          country: "Algeria",
          coordinates: {
            lat: "36.8662",
            lng: "6.9066",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"16",
    type: "Workshop",
    subCategory: "Plogging",
    name: "City Park Cleanup",
    description: "Help us clean up the city park while getting some exercise.",
    price: 0,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-780-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image7],
    tags: ["Environment", "Exercise"],
    organizer: [
      {
        name: "Eco Warriors",
        contact: "+213-780-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "09:00 AM",
        activityDescription: "Cleanup Starts",
        place: {
          address: "Central Park",
          city: "Blida",
          state: "Blida",
          country: "Algeria",
          coordinates: {
            lat: "36.4795",
            lng: "2.8298",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"17",
    type: "Activity",
    subCategory: "Themed Resto",
    name: "Pirate Dinner",
    description: "Enjoy a pirate-themed dinner with interactive entertainment.",
    price: 35,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://piratedinner.example.com",
      phoneNumber: "+213-781-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image6],
    tags: ["Food", "Entertainment"],
    organizer: [
      {
        name: "Adventure Dinners",
        contact: "+213-781-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "07:00 PM",
        activityDescription: "Dinner Starts",
        place: {
          address: "Pirate Bay",
          city: "Chlef",
          state: "Chlef",
          country: "Algeria",
          coordinates: {
            lat: "36.1653",
            lng: "1.3345",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"18",
    type: "Activity",
    subCategory: "Gameplace",
    name: "Board Game Night",
    description: "Bring your favorite board games and join us for a fun night.",
    price: 10,
    currency: "DZD",
    registration: {
      required: false,
      phoneNumber: "+213-782-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image5],
    tags: ["Games", "Social"],
    organizer: [
      {
        name: "Gamers Club",
        contact: "+213-782-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "06:00 PM",
        activityDescription: "Game Night Starts",
        place: {
          address: "Gaming Hub",
          city: "Bouira",
          state: "Bouira",
          country: "Algeria",
          coordinates: {
            lat: "36.3749",
            lng: "3.902",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"19",
    type: "Event",
    subCategory: "Concert",
    name: "Jazz Festival",
    description: "Enjoy a night of jazz music at our annual festival.",
    price: 45,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://jazzfestival.example.com",
      phoneNumber: "+213-783-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image4],
    tags: ["Music", "Jazz"],
    organizer: [
      {
        name: "Jazz Society",
        contact: "+213-783-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "06:00 PM",
        activityDescription: "Festival Starts",
        place: {
          address: "Jazz Club",
          city: "Tlemcen",
          state: "Tlemcen",
          country: "Algeria",
          coordinates: {
            lat: "34.8783",
            lng: "-1.315",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
  {
    id:"20",
    type: "Trip",
    subCategory: "Other",
    name: "Cultural Heritage Tour",
    description: "Explore the cultural heritage sites of Algeria.",
    price: 400,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://heritagetours.example.com",
      phoneNumber: "+213-784-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image2, image3],
    tags: ["Culture", "History"],
    organizer: [
      {
        name: "Heritage Tours",
        contact: "+213-784-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "08:00 AM",
        activityDescription: "Tour Starts",
        place: {
          address: "City Center",
          city: "Ghardaia",
          state: "Ghardaia",
          country: "Algeria",
          coordinates: {
            lat: "32.4907",
            lng: "3.6739",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: false,
  },
  {
    id:"21",
    type: "Workshop",
    subCategory: "Other",
    name: "Photography Basics",
    description:
      "Learn the basics of photography in this introductory workshop.",
    price: 20,
    currency: "DZD",
    registration: {
      required: true,
      registrationLink: "https://photoworkshops.example.com",
      phoneNumber: "+213-785-000000",
    },
    maxAttendees: null,
    status: "Open",
    images: [image1],
    tags: ["Photography", "Art"],
    organizer: [
      {
        name: "Photo Academy",
        contact: "+213-785-111111",
      },
    ],
    isOnline: false,
    OnSiteAgenda: [
      {
        category: "start",
        time: "02:00 PM",
        activityDescription: "Workshop Starts",
        place: {
          address: "Photo Studio",
          city: "Ouargla",
          state: "Ouargla",
          country: "Algeria",
          coordinates: {
            lat: "31.9493",
            lng: "5.325",
          },
        },
      },
    ],
    reviews: [],
    socialMediaLinks: [],
    isParking: true,
  },
];
