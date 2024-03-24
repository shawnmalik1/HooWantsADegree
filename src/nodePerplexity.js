require('dotenv').config();
const fs = require('fs');
const Papa = require('papaparse');
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json()); // Use Express's built-in JSON parser middleware

// API endpoint to receive data from React
app.post('/receive-data', async (req, res) => { // Make the callback async to use await
  const { major, year, semesters, courses, professionalInterests, personalInterests } = req.body;
  console.log('Data received from React:', req.body);

  try {
    // Call the perplexityAI function with the data from React
    const aiResponse = await perplexityAI(major, year, semesters, courses, professionalInterests, personalInterests);
    res.status(200).json({ message: aiResponse });
  } catch (error) {
    console.error('Error in perplexityAI:', error);
    res.status(500).send('An error occurred in the AI processing');
  }
});

app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});

async function perplexityAI(major, year, semesters, courses, professionalInterests, personalInterests) {
  const API_KEY = process.env.PERPLEXITY_API_KEY;
  const model = 'pplx-7b-online'; // Updated model name as per the prompt

  // Ensure courses is always an array to prevent TypeError when calling join
  const coursesList = Array.isArray(courses) ? courses : []; // !?

  console.log(major, year, semesters, courses, professionalInterests, personalInterests);

  if (typeof major === 'undefined' || typeof year === 'undefined' || typeof semesters === 'undefined' || typeof professionalInterests === 'undefined' || typeof personalInterests === 'undefined' || !Array.isArray(courses)) {
    throw new Error('One or more required variables are undefined');
  }

  const prompt = `Give me a ${semesters} semester by semester plan for a ${major} at the University of Virginia based on the University of Virginia requirements. Please don't repeat classes. The student is a ${year} with professional interests that consist of ${professionalInterests} and personal interests in ${personalInterests}. The student has already taken the following courses: ${courses.join(', ')}.`;


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
    const response = await axios.post('https://api.perplexity.ai', { // !?
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
    return response.data.choices[0].message.content; // Return the content from the API response
  } catch (error) {
    console.error('Error querying Perplexity API:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

async function readAndProcessCSV() {
  const csvFile = fs.readFileSync('all_courses.csv', 'utf8');
  Papa.parse(csvFile, {
    header: true,
    dynamicTyping: true,
    complete: async function(results) {
      console.log(results);
      const majors = results.data.map(row => row.majorName).filter((value, index, self) => self.indexOf(value) === index);
      
      //console.log(majors)
      
      for (let majorName of majors) {
        // Ensure all required variables are defined before calling perplexityAI
        // For demonstration purposes, I'm setting dummy values for the other parameters
        // You should replace these with actual values from your CSV or other data source
        // if(typeof majorName==='undefined'){
        //   majorName= 'Computer Science';
        // }

        const year = 'First year'; // !? Replace with actual year
        const semesters = '8 semesters'; // !? Replace with actual semesters
        const courses = ['CS 1110', 'APMA 1090']; // !? Replace with actual courses
        const professionalInterests = 'wants to be a computer scientist'; // !? Replace with actual professional interests
        const personalInterests = 'Likes Math would like to do more APMA courses'; // !? Replace with actual personal interests

        // Now call perplexityAI with all required variables

        await perplexityAI(majorName, year, semesters, courses, professionalInterests, personalInterests); // !?
      }
    },
    error: function(err) {
      console.error("Error parsing CSV:", err.message);
    }
  });
}

// Start the CSV processing
readAndProcessCSV().catch(console.error); // !? Added catch for unhandled promise rejections