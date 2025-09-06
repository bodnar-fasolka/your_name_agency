exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

    // Always return properly formatted JSON
    const response = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'production'
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };

  } catch (error) {
    console.error('Health check error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};
