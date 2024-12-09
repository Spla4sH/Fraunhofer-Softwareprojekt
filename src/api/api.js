export async function getTickets() {
  try {
    const response = await fetch("http://localhost:3000/tickets", {
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
    const response = await fetch(`http://localhost:3000/tickets/${id}`, {
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
