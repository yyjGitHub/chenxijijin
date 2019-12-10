const Token = "user_token";

export function setToken(token) {
  return new Promise(resolve => {
    sessionStorage.setItem(Token, token);
    return resolve(true);
  });
}

export function getToken() {
  return sessionStorage.getItem(Token);
}

export function removeToken() {
  return new Promise(resolve => {
    sessionStorage.removeItem(Token);
    resolve(true);
  });
}
