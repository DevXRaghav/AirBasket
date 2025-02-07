package com.airline;

import java.util.List;

public class FlightSearch {
    public List<String> searchFlights(String departure, String destination, String date) {
        // Add search logic here
        System.out.println("Searching flights from " + departure + " to " + destination + " on " + date);
        return List.of("Flight 101", "Flight 102");  // Example flights
    }
}
