import { mongoose } from "mongoose";
const busSchema = mongoose.Schema(
  {
    staffName: {
      driverName: {
        type: String,
        required: true,
      },
      helperName: {
        type: String,
        required: true,
      },
    },

    busNumber: {
      type: Number,
      required: true,
    },
    busName: {
      type: String,
      required: true,
    },
    tripSat1: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripSat2: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripSat3: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripSun1: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripSun2: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripSun3: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripMon1: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripMon2: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripMon3: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripTue1: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripTue2: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripTue3: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripWed1: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripWed2: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripWed3: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripThu1: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripThu2: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tripThu3: {
      tripType: {
        type: String,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Bus = mongoose.model("CUET-BUS", busSchema);
