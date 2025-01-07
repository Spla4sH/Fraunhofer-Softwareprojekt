import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import bodyParser from 'body-parser';
import helmet from 'helmet';


// PostgreSQL-Verbindungsdetails
const dbConfig = {
  user: 'postgres', // PostgreSQL-Benutzername
  host: 'localhost',     // Hostname
  database: 'items',     // Datenbankname
  password: '74MLka', // PostgreSQL-Passwort
  port: 5432,            // Port
};

const pool = new Pool(dbConfig);

// Express-App initialisieren
const app = express();
app.use(bodyParser.json());

// Middleware hinzufügen
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "https://apis.google.com"], // Erlaube deine Quellen
      },
    },
  })
);

// Test-Endpunkt: Verbindung zur Datenbank
app.get('/api/ping', async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
    res.status(200).send('Database connection successful');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection failed');
  }
});

// GET: Alle Tickets abrufen
app.get('/api/tickets', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tickets');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving tickets');
  }
});

// GET: Einzelnes Ticket abrufen
app.get('/api/tickets/:id', async (req, res) => {
  const ticketId = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM tickets WHERE id = $1', [ticketId]);
    if (result.rows.length === 0) {
      res.status(404).send('Ticket not found');
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving ticket');
  }
});

// POST: Neues Ticket erstellen
app.post('/api/tickets', async (req, res) => {
  const { subject, description, status, author_id, author, ci_id } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO tickets (subject, description, status, author_id, author, ci_id) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [subject, description, status || 'open', author_id, author, ci_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating ticket');
  }
});

// PUT: Ticket aktualisieren
app.put('/api/tickets/:id', async (req, res) => {
  const ticketId = req.params.id;
  const { subject, description, status, author_id, author, ci_id } = req.body;
  try {
    const result = await pool.query(
      `UPDATE tickets 
       SET subject = $1, description = $2, status = $3, author_id = $4, author = $5, ci_id = $6
       WHERE id = $7 RETURNING *`,
      [subject, description, status, author_id, author, ci_id, ticketId]
    );
    if (result.rows.length === 0) {
      res.status(404).send('Ticket not found');
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating ticket');
  }
});

// DELETE: Ticket löschen
app.delete('/api/tickets/:id', async (req, res) => {
  const ticketId = req.params.id;
  try {
    const result = await pool.query('DELETE FROM tickets WHERE id = $1 RETURNING *', [ticketId]);
    if (result.rows.length === 0) {
      res.status(404).send('Ticket not found');
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting ticket');
  }
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// src/api/api.js

const API_BASE_URL = "http://localhost:3000/api"; // Basis-URL der API

// Get Tickets
export async function getTickets() {
    const response = await fetch(`${API_BASE_URL}/tickets`);
    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }
    
    const jsonResponse = await response.json();
    console.log("Tickets Response:", jsonResponse); // Debugging output
    return jsonResponse;
  }
  
  // Get Single Ticket
  export async function getTicket(id) {
    const response = await fetch(`${API_BASE_URL}/tickets/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ticket with id ${id}`);
    }
    
    const jsonResponse = await response.json();
    console.log(`Ticket ${id} Response:`, jsonResponse); // Debugging output
    return jsonResponse;
  }
