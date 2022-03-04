const ajaxJSON = (url: string, data: any, { method = 'POST', timeout = 5000 } = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const fetchPromise = fetch(url, {
    headers,
    method,
    body: JSON.stringify(data),
  });
  // eslint-disable-next-line no-promise-executor-return
  const waitPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Превышено время ожидания HTTP(S) запроса!')), timeout));
  return Promise.race([fetchPromise, waitPromise]);
};

export default ajaxJSON;
