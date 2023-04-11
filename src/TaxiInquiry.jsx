import React, { useState } from "react";

function TaxiInquiry() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Taxi Booking</h1>
      {submitted ? (
        <div>
          <p>Thank you for your inquiry!</p>
          <p>Pickup location: {pickupLocation}</p>
          <p>Drop-off location: {dropoffLocation}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Additional requirements: {additionalRequirements}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Pickup Location <i class="fa-solid fa-taxi"></i> :
            <input
              type="text"
              className="pickup"
              placeholder="Enter Your Pickup Location"
              value={pickupLocation}
              onChange={(event) => setPickupLocation(event.target.value)}
            />
          </label>
          <label>
            Drop-off Location <i class="fas fa-map-marked-alt"></i> :
            <input
              type="text"
              className="drop"
              placeholder="Enter Your Drop Location"
              value={dropoffLocation}
              onChange={(event) => setDropoffLocation(event.target.value)}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </label>
          <label>
            Additional Requirements:
            <textarea
              value={additionalRequirements}
              onChange={(event) =>
                setAdditionalRequirements(event.target.value)
              }
            />
          </label>
          <button type="submit" className="sub">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default TaxiInquiry;
