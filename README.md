
# JetBus API

![GitHub top language](https://img.shields.io/github/languages/top/lathika-sunder/jetbus-server)
![GitHub language count](https://img.shields.io/github/languages/count/lathika-sunder/jetbus-server)
![GitHub repo size](https://img.shields.io/github/repo-size/lathika-sunder/jetbus-server)
![GitHub last commit](https://img.shields.io/github/last-commit/lathika-sunder/jetbus-server)

JetBus is a bus ticket booking system built using the MERN stack (MongoDB, Express, React, Node.js). This API handles user authentication, booking management, and bus details.

## Schema Design

![Schema Design](https://github.com/lathika-sunder/jetbus-server/assets/95066409/220c49cb-0850-4a6a-88ad-076ad1a48a41)

## Technologies Used

- MongoDB
- Express.js
- Node.js
- JWT (JSON Web Tokens)
- Cookies
- Cron Jobs

## API Endpoints

### Users

#### Authenticate User

- **Endpoint:** `/user/login`
- **Method:** POST
- **Description:** Authenticate user and start session.

#### Logout User

- **Endpoint:** `/user/logout`
- **Method:** POST
- **Description:** End user session.

#### Register User

- **Endpoint:** `/user/signup`
- **Method:** POST
- **Description:** Register a new user.

#### Edit User Details

- **Endpoint:** `/user/editDetails`
- **Method:** PUT
- **Description:** Edit user details.

#### Fetch User Details

- **Endpoint:** `/user/getDetails`
- **Method:** GET
- **Description:** Fetch details of the logged-in user.

### Bookings

#### Retrieve User Bookings

- **Endpoint:** `/bookings/getBookingsOfUser`
- **Method:** GET
- **Description:** Retrieve bookings for a specific user.

#### Retrieve Bus Bookings

- **Endpoint:** `/bookings/getBookingsOfBus`
- **Method:** GET
- **Description:** Retrieve bookings for a specific bus.

#### Create Booking

- **Endpoint:** `/bookings/postBooking`
- **Method:** POST
- **Description:** Create a new booking.

#### Calculate Booking Cost

- **Endpoint:** `/bookings/calculateCost`
- **Method:** POST
- **Description:** Calculate the cost of a booking.

#### Cancel Booking

- **Endpoint:** `/bookings/cancelBooking`
- **Method:** DELETE
- **Description:** Cancel a booking.

#### Fetch Booking Details

- **Endpoint:** `/bookings/getBookingDetails/{bookingId}`
- **Method:** GET
- **Description:** Fetch details of a specific booking.

#### Update Booking

- **Endpoint:** `/bookings/updateBooking`
- **Method:** PUT
- **Description:** Update booking details.

### Buses

#### Retrieve Available Seats

- **Endpoint:** `/bus/getSeats`
- **Method:** GET
- **Description:** Retrieve available seats for a specific bus.

#### Retrieve Buses

- **Endpoint:** `/bus/getBuses/{query=from,to,date}`
- **Method:** GET
- **Description:** Retrieve buses based on query parameters.

#### Filter Buses

- **Endpoint:** `/bus/filterBuses/{query}`
- **Method:** GET
- **Description:** Filter buses based on criteria.

#### Add New Bus

- **Endpoint:** `/bus/postBus`
- **Method:** POST
- **Description:** Add a new bus to the system.

#### Upload Bus Photos

- **Endpoint:** `/bus/postBusPhotos`
- **Method:** POST
- **Description:** Upload photos of a bus.

#### Remove Bus

- **Endpoint:** `/bus/deleteBus`
- **Method:** DELETE
- **Description:** Remove a bus from the system.

#### Edit Bus Details

- **Endpoint:** `/bus/editBus`
- **Method:** PUT
- **Description:** Edit bus details.

#### Fetch Bus Details

- **Endpoint:** `/bus/getBusDetails/{busId}`
- **Method:** GET
- **Description:** Fetch detailed information about a specific bus.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/lathika-sunder/jetbus-server.git
cd jetbus-server
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory and add your environment variables.

```env
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=4040
```

4. Start the server

```bash
npm start
```

## Deployment

This API is deployed using Vercel.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

