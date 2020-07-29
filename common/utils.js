export const request = async (url, method, data, authorization = false, token = false) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (authorization) {
    headers.authorization = token;
  }

  const options = {
    headers,
    method,
  };

  if (data) {
    options.body = data;
  }
  return fetch(url, options)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch((error) => error.message);
};