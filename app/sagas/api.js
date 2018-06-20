
import fetch from 'isomorphic-fetch';

const baseUrl = 'https://reqres.in/api/';
const usersUrl = `${baseUrl}users?per_page=6`;

const getUsers = async (page) => {
  const response = await fetch(`${usersUrl}&page=${page}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default getUsers;

