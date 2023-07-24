import "./styles.css";

const generateRandomScores = () => {
  const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Alice Lee', 'Bob Brown'];
  const scores = Array.from({ length: names.length }, () => Math.floor(Math.random() * 100) + 1);

  return names.map((name, index) => ({ name, score: scores[index] }));
};

const populateTable = () => {
  const data = generateRandomScores();

  const tableBody = document.querySelector('.scores-table tbody');
  tableBody.innerHTML = '';

  data.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.score}</td>
    `;
    tableBody.appendChild(row);
  });
};

document.querySelector('.refresh-btn').addEventListener('click', () => {
  populateTable();
});

document.querySelector('.submit-btn').addEventListener('click', () => {
  const name = document.querySelector('.input-name').value;
  const score = document.querySelector('.input-score').value;
  console.log('Name:', name, 'Score:', score);
});

populateTable();