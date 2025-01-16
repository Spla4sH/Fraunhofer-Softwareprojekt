const API_BASE_URL = "http://127.0.0.1:5000";

// Get all tickets
export async function getTickets() {
  try {
    const response = await fetch(`${API_BASE_URL}/tickets`);
    if (!response.ok) {
      throw new Error(`Failed to fetch tickets: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
}

// Get a single ticket by ID
export async function getTicket(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/tickets/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ticket ${id}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    return null;
  }
}

// Create a new ticket
// export async function createTicket(ticketData) {
//   const response = await fetch(`${API_BASE_URL}/tickets`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(ticketData),
//   });
//   if (!response.ok) {
//     throw new Error("Failed to create ticket");
//   }
//   return await response.json();
// }

export async function createTicket(ticketData) {
  const response = await fetch("/api/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticketData),
  });
  if (!response.ok) {
    throw new Error("Failed to create ticket");
  }
  return await response.json();
}

// Update an existing ticket
export async function updateTicket(ticketId, updatedData) {
  const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update ticket with ID ${ticketId}`);
  }
  return await response.json();
}

// Delete a ticket
export async function deleteTicket(ticketId) {
  const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}`, {
    method: "DELETE",
    headers,
  });
  if (!response.ok) {
    throw new Error(`Failed to delete ticket with ID ${ticketId}`);
  }
  return await response.json();
}