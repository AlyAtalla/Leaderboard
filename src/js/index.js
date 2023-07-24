import './styles.css';

const API_BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 'Zl4d7IVkemOTTVg2fUdz';

const populateList = (scores) => {
  const list = document.querySelector('.scores-list');
  list.innerHTML = '';

  scores.forEach((item) => {
    const listItem = document.createElement('tr'); // Use <tr> instead of <li> for table rows
    listItem.innerHTML = `
      <td>${item.user}</td>
      <td>${item.score}</td>
    `;
    list.appendChild(listItem);
  });
};

const fetchScores = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${GAME_ID}/scores`);
    const data = await response.json();
    return data.result; // Access the 'result' property of the response
  } catch (error) {
    console.error('Error fetching scores:', error);
    return [];
  }
};

document.querySelector('.refresh-btn').addEventListener('click', async () => {
  const scores = await fetchScores();
  populateList(scores);
});

document.querySelector('.submit-btn').addEventListener('click', async () => {
  const name = document.querySelector('.input-name').value;
  const score = document.querySelector('.input-score').value;

  try {
    const response = await fetch(`${API_BASE_URL}/games/${GAME_ID}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score: Number(score) }),
    });

    const data = await response.json();
    console.log('Score submitted successfully:', data);

    // Append the submitted data to the list
    const scores = await fetchScores(); // Fetch the updated scores from the API
    populateList(scores);

    // Clear input fields after submitting
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-score').value = '';
  } catch (error) {
    console.error('Error submitting score:', error);
  }
});

// Initially fetch and populate the list with empty scores
const initialScores = [];
populateList(initialScores);