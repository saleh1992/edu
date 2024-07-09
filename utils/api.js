// Import the dotenv package to use environment variables
require('dotenv').config();

// Function to post data to the api/register endpoint
async function registerUser({ email, username, password, password_confirmation }) {
  const url = `${process.env.API_BASE_URL}/api/register`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Export the registerUser function for use in other parts of your application
module.exports = { registerUser };