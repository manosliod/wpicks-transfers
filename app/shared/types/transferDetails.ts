export interface TransferDetailsItem {
  id: number | string;
  from_location_title: string;
  from_location_address: string;
  from_datetime: string; // ISO date string
  to_location_title: string;
  to_location_address: string;
  to_datetime: string; // ISO date string
  passengers: number | string;
  babyseats: number | string;
  luggage: number | string;
  hand_luggage: number | string;
  flight_status: {
    flight_number: string;
    flight_time: string; // format: "HH:mm"
    flight_status: string; // consider stricter typing if needed
  };
  traveler: {
    phone_number: string;
    email: string;
    country: string;
  };
}
