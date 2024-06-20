# JetBus

## Schema Design
![image](https://github.com/lathika-sunder/jetbus-server/assets/95066409/220c49cb-0850-4a6a-88ad-076ad1a48a41)

## API Endpoints

## Users

### Authenticate User
- **Endpoint:** `/user/login`
- **Method:** POST
- **Description:** Authenticate user and start session.

### Logout User
- **Endpoint:** `/user/logout`
- **Method:** POST
- **Description:** End user session.

### Register User
- **Endpoint:** `/user/signup`
- **Method:** POST
- **Description:** Register a new user.

### Edit User Details
- **Endpoint:** `/user/editDetails`
- **Method:** PUT
- **Description:** Edit user details.

### Fetch User Details
- **Endpoint:** `/user/getDetails`
- **Method:** GET
- **Description:** Fetch details of the logged-in user.

## Bookings

### Retrieve User Bookings
- **Endpoint:** `/bookings/getBookingsOfUser`
- **Method:** GET
- **Description:** Retrieve bookings for a specific user.

### Retrieve Bus Bookings
- **Endpoint:** `/bookings/getBookingsOfBus`
- **Method:** GET
- **Description:** Retrieve bookings for a specific bus.

### Create Booking
- **Endpoint:** `/bookings/postBooking`
- **Method:** POST
- **Description:** Create a new booking.

### Calculate Booking Cost
- **Endpoint:** `/bookings/calculateCost`
- **Method:** POST
- **Description:** Calculate the cost of a booking.

### Cancel Booking
- **Endpoint:** `/bookings/cancelBooking`
- **Method:** DELETE
- **Description:** Cancel a booking.

### Fetch Booking Details
- **Endpoint:** `/bookings/getBookingDetails/{bookingId}`
- **Method:** GET
- **Description:** Fetch details of a specific booking.

### Update Booking
- **Endpoint:** `/bookings/updateBooking`
- **Method:** PUT
- **Description:** Update booking details.

## Buses

### Retrieve Available Seats
- **Endpoint:** `/bus/getSeats`
- **Method:** GET
- **Description:** Retrieve available seats for a specific bus.

### Retrieve Buses
- **Endpoint:** `/bus/getBuses/{query=from,to,date}`
- **Method:** GET
- **Description:** Retrieve buses based on query parameters.

### Filter Buses
- **Endpoint:** `/bus/filterBuses/{query}`
- **Method:** GET
- **Description:** Filter buses based on criteria.

### Add New Bus
- **Endpoint:** `/bus/postBus`
- **Method:** POST
- **Description:** Add a new bus to the system.

### Upload Bus Photos
- **Endpoint:** `/bus/postBusPhotos`
- **Method:** POST
- **Description:** Upload photos of a bus.

### Remove Bus
- **Endpoint:** `/bus/deleteBus`
- **Method:** DELETE
- **Description:** Remove a bus from the system.

### Edit Bus Details
- **Endpoint:** `/bus/editBus`
- **Method:** PUT
- **Description:** Edit bus details.

### Fetch Bus Details
- **Endpoint:** `/bus/getBusDetails/{busId}`
- **Method:** GET
- **Description:** Fetch detailed information about a specific bus.

## Operators

### Add New Operator
- **Endpoint:** `/operators/postOperator`
- **Method:** POST
- **Description:** Add a new bus operator.

### Retrieve Operators
- **Endpoint:** `/operators/getOperators`
- **Method:** GET
- **Description:** Retrieve a list of bus operators.

### Fetch Operator Details
- **Endpoint:** `/operators/getOperatorDetails/{operatorId}`
- **Method:** GET
- **Description:** Fetch detailed information about a specific operator.

### Update Operator Details
- **Endpoint:** `/operators/updateOperator`
- **Method:** PUT
- **Description:** Update operator details.



