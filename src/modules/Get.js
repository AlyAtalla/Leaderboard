export const id = 'ZTp6WjEdBYQQYfIGvFXP';
export const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

const getUsers = async () => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return false;
  }
};

export default getUsers;