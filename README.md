# JetBus

## Schema Design
![image](https://github.com/lathika-sunder/jetbus-server/assets/95066409/220c49cb-0850-4a6a-88ad-076ad1a48a41)

## API Endpoints

Users
/user/login: POST - Authenticate user and start session.
/user/logout: POST - End user session.
/user/signup: POST - Register a new user.
/user/editDetails: PUT - Edit user details.
/user/getDetails: GET - Fetch details of the logged-in user.
/user/changePassword: PUT - Change user password.
/user/forgotPassword: POST - Initiate password recovery.
Bookings
/bookings/getBookingsOfUser: GET - Retrieve bookings for a specific user.
/bookings/getBookingsOfBus: GET - Retrieve bookings for a specific bus.
/bookings/postBooking: POST - Create a new booking.
/bookings/calculateCost: POST - Calculate the cost of a booking.
/bookings/cancelBooking: DELETE - Cancel a booking.
/bookings/getBookingDetails/{bookingId}: GET - Fetch details of a specific booking.
/bookings/updateBooking: PUT - Update booking details.
/bookings/getBookingStatus/{bookingId}: GET - Check the status of a booking.
Buses
/bus/getSeats: GET - Retrieve available seats for a specific bus.
/bus/getBuses/{query=from,to,date}: GET - Retrieve buses based on query parameters.
/bus/filterBuses/{query}: GET - Filter buses based on criteria.
/bus/postRating: POST - Submit a rating for a bus.
/bus/postBusPhotos: POST - Upload photos of a bus.
/bus/postBus: POST - Add a new bus to the system.
/bus/deleteBus: DELETE - Remove a bus from the system.
/bus/editBus: PUT - Edit bus details.
/bus/getBusDetails/{busId}: GET - Fetch detailed information about a specific bus.
/bus/getBusRatings/{busId}: GET - Retrieve ratings and reviews for a specific bus.
/bus/updateBusStatus: PUT - Update the current status of a bus.
Operators
/operators/postOperator: POST - Add a new bus operator.
/operators/getOperators: GET - Retrieve a list of bus operators.
/operators/getOperatorDetails/{operatorId}: GET - Fetch detailed information about a specific operator.
/operators/updateOperator: PUT - Update operator details.


