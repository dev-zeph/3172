const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Enable CORS
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Parse JSON bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// In-memory storage for messages (simulating a database)
let messages = [];

// Helper function to sanitize input (remove HTML tags)
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/<[^>]*>/g, '').trim();
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate name (allow spaces, hyphens, apostrophes, accents)
function isValidName(name) {
  const nameRegex = /^[a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF\s\-']+$/;
  return nameRegex.test(name);
}

// Helper function to validate subject (letters only)
function isValidSubject(subject) {
  const subjectRegex = /^[a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF\s]+$/;
  return subjectRegex.test(subject);
}

// Helper function to validate message (no HTML special characters)
function isValidMessage(message) {
  const htmlRegex = /[<>]/;
  return !htmlRegex.test(message);
}

// Routes
router.get('/', (req, res) => {
  res.json({ message: 'Hello World - Contact API is running' });
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running', timestamp: new Date().toISOString() });
});

router.post('/contact', (req, res) => {
  try {
    const { name, email, subject, message, consent } = req.body;

    // Check if all required fields are present
    if (!name || !email || !subject || !message || !consent) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
        details: {
          name: !name ? 'Name is required' : null,
          email: !email ? 'Email is required' : null,
          subject: !subject ? 'Subject is required' : null,
          message: !message ? 'Message is required' : null,
          consent: !consent ? 'Consent is required' : null
        }
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message)
    };

    // Validate inputs
    const validationErrors = {};

    if (!isValidName(sanitizedData.name)) {
      validationErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }

    if (!isValidEmail(sanitizedData.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!isValidSubject(sanitizedData.subject)) {
      validationErrors.subject = 'Subject can only contain letters and spaces';
    }

    if (!isValidMessage(sanitizedData.message)) {
      validationErrors.message = 'Message cannot contain HTML special characters (< >)';
    }

    // Check if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors
      });
    }

    // Create message object with timestamp
    const newMessage = {
      id: Date.now(),
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      dateReceived: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Save to in-memory storage
    messages.push(newMessage);
    console.log('Message saved:', newMessage.id);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: newMessage.id,
        timestamp: newMessage.timestamp
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

router.get('/messages', (req, res) => {
  try {
    // Return messages sorted by most recent first
    const sortedMessages = messages
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .map(msg => ({
        id: msg.id,
        name: msg.name,
        subject: msg.subject,
        message: msg.message,
        dateReceived: msg.dateReceived
      }));

    res.json({
      success: true,
      count: sortedMessages.length,
      data: sortedMessages
    });

  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

app.use('/api', router);

module.exports.handler = serverless(app);