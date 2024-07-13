const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subCategories = {
  Workshop: ["Plogging", "Other"],
  Activity: ["themed Restaurant", "Gameplace", "Karaoke", "Cinema", "Other"],
  Trip: ["Hiking", "Cruise", "park", "Other"],
  Event: ["Concert", "Karaoke", "Other"],
};

const eventSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Workshop", "Activity", "Trip", "Event"],
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return subCategories[this.type].includes(value);
        },
        message: (props) =>
          `${props.value} is not a valid subcategory for ${props.instance.type}`,
      },
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number, // can be free 0
    },
    currency: {
      type: String,
      enum: ["DZD", "Other"],
      default: "DZD",
    },
    registration: {
      // show reservation link or phone number
      required: {
        type: Boolean,
        default: false,
      },
      registrationLink: {
        type: String,
      },
      registrationDeadline: {
        type: Date,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      description: { type: String },
    },
    maxAttendees: {
      type: Number,
    },
    status: {
      type: String, //open closed other ...
    },
    images: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    organizer: [
      //optional
      {
        name: {
          type: String,
        },
        contact: {
          type: String,
        },
      },
    ],
    sponsors: [
      {
        name: String,
        logo: String,
        url: String,
      },
    ],
    isOnline: {
      type: Boolean,
    },
    Onlinelink: {
      type: Boolean,
    },
    OnSiteAgenda: [
      {
        category: {
          type: String,
          enum: ["start", "end"],
          default: "start",
        },
        time: {
          type: String,
        },
        activityDescription: {
          type: String,
        },
        place: {
          address: {
            type: String,
            required: true,
          },
          city: {
            type: String,
          },
          state: {
            //wilaya
            type: String,
          },
          country: {
            type: String,
          },
          coordinates: {
            lat: {
              type: String,
              required: true,
            },
            lng: {
              type: String,
              required: true,
            },
          },
        },
      },
    ],
    reviews: [
      //login to review places?
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        comment: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    socialMediaLinks: [
      {
        platform: String,
        link: String,
      },
    ],
    isParking: {
      //parking exists or not
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
