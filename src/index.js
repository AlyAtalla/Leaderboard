import './styles.css';
import './main.scss';
import renderUsers from './modules/Render.js';
import addUser from './modules/Add.js';

const inputFields = document.getElementById('input-fields');
const refreshButton = document.getElementById('refresh');

window.onload = (e) => {
  e.preventDefault();
  renderUsers();
};

inputFields.onsubmit = (e) => {
  e.preventDefault();
  addUser();
};

refreshButton.onclick = (e) => {
  e.preventDefault();
  renderUsers();
};
