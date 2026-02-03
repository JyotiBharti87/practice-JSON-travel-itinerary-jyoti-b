const tripTravelJASON =
{
"tripName": "Trip to Orlando",  //Trip Name
  "traveler": {
    "fullName": "Ava Jane",     //Traveler's fullName
    "contact": {                //contact: Includes email and phone 
      "email": "jane123@gmail.com",
      "phone": 2012387890
    }
  },
 //Destinations: Each destination should include:

  "destination": [
    {
      "location": "Disney World",// location: The name of the destination 
      "arrivalDate": "2026-02-02", // arrivalDate: The date of arrival in the format YYYY-MM-DD.
      "departureDate": "2026-02-10",// departureDate: The date of departure in the format YYYY-MM-DD.
      "activities": [                // ○ activities: Each activity should include:
        {
          "title": "Magic Kingdom", // ■ title: The name of the activity.
          "time": "10:00 AM"      // ■ time: The scheduled time (e.g., "10:00 AM").
        },
        {
          "title": "Universal Studio",
          "time": "3:00 PM"
        }
      ]
    },
    {
      "location": "Florida",
      "arrivalDate": "2026-02-11",
      "departureDate": "2026-02-15",
      "activities": [
        {
          "title": "Epcot",
          "time": "10:00 AM"
        },
        {
          "title": "Sea Life Aquarium",
          "time": "3:00 PM"
        }
      ]
    }
  ]
}