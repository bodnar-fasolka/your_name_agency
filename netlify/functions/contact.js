exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  try {
    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'OK' })
      };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ 
          error: 'Method not allowed',
          message: 'Only POST requests are allowed'
        })
      };
    }

    // Parse request body
    let requestBody;
    try {
      requestBody = JSON.parse(event.body || '{}');
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Invalid JSON',
          message: 'Request body must be valid JSON'
        })
      };
    }

    // Validate required fields
    const { name, email, message } = requestBody;
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          message: 'Name, email, and message are required'
        })
      };
    }

    // Here you would typically send the email or save to database
    // For now, we'll just return a success response
    console.log('Contact form submission:', { name, email, message });

    // Always return a properly formatted response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    // Always handle errors and return proper JSON
    console.error('Contact function error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.',
        timestamp: new Date().toISOString()
      })
    };
  }
};
