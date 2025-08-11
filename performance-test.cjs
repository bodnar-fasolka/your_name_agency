#!/usr/bin/env node

// Simple performance testing script
const https = require('https');
const fs = require('fs');

async function measurePerformance(url) {
  const start = Date.now();
  
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const end = Date.now();
        const loadTime = end - start;
        
        console.log(`🚀 Performance Test Results for ${url}`);
        console.log(`📊 Load Time: ${loadTime}ms`);
        console.log(`📏 Response Size: ${Buffer.byteLength(data, 'utf8')} bytes`);
        console.log(`🔍 Status Code: ${res.statusCode}`);
        
        if (loadTime > 2000) {
          console.log('⚠️  Warning: Load time exceeds 2 seconds');
          process.exit(1);
        } else {
          console.log('✅ Performance test passed!');
        }
        
        resolve({ loadTime, size: Buffer.byteLength(data, 'utf8') });
      });
    });
    
    req.on('error', (err) => {
      console.error('❌ Error:', err.message);
      reject(err);
    });
    
    req.setTimeout(5000, () => {
      console.error('⏰ Request timeout');
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

// Run the test
const url = process.argv[2] || 'https://www.your-name.agency';
measurePerformance(url).catch(console.error);
