URL = "http://localhost:3000";

export async function getTickets() {
  try {
    const response = await fetch(`${URL}/tickets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // Parse JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Es gab ein Problem mit dem Fetch-Request:", error);
    return []; // Return an empty array as a fallback
  }
}

export async function getTicket(id) {
  try {
    const response = await fetch(`${URL}/tickets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // Parse JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Es gab ein Problem mit dem Fetch-Request:", error);
    return []; // Return an empty array as a fallback
  }
}

export async function postTicket(ticketData) {
  try {
    // Dummy data for the POST request payload
    const dummyData = {
      nummer: 123464,
      status: {
        label: "Open",
        status_changed: "2023-11-09",
      },
      betreff: "DUMMY TICKET",
      id: "n1m2b3v4c5x6",
      dateCreated: "2023-11-07",
      process: {
        revisor: "Jake W",
        date: "2023-11-09",
        comment: "investigating issue",
      },
    };

    const response = await fetch(`${URL}/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dummyData), // Send dummy data as the request body
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // Parse JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("There was a problem with the fetch request:", error);
    return null; // Return null as a fallback
  }
}
