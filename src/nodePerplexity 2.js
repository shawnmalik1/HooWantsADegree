require('dotenv').config();
const fs = require('fs');
const Papa = require('papaparse');
const axios = require('axios');

async function perplexityAI(majorName) {
  const API_KEY = process.env.PERPLEXITY_API_KEY;
  const model = 'mistral-7b-instruct';
  const prompt = `Give me a 4 year plan semester by semester for a ${majorName} major at the University Of Virginia based on the University Of Virginia requirements. Please don't repeat classes`;

  const messages = [
    {
      "role": "system",
      "content": "You are a helpful assistant who provides course plans and guidance for users at the University Of Virginia."
    },
    {
      "role": "user",
      "content": prompt
    }
  ];

  try {
    const response = await axios.post('https://api.perplexity.ai/v1/chat/completions', {
      model: model,
      messages: messages,
      max_tokens: 4000
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error querying Perplexity API:', error);
  }
}

function readAndProcessCSV() {
  const csvFile = fs.readFileSync('allcourses.csv', 'utf8');
  Papa.parse(csvFile, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      const majors = results.data.map(row => row.majorName).filter((value, index, self) => self.indexOf(value) === index);
      majors.forEach(majorName => {
        perplexityAI(majorName);
      });
    },
    error: function(err) {
      console.error("Error parsing CSV:", err.message);
    }
  });
}

// Start the CSV processing
readAndProcessCSV();