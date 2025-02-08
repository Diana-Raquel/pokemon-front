import Cookies from 'js-cookie';

export const setCookie = (key: string, value: string, expires: number = 7) => {
  return Cookies.set(key, value, {
    expires,
    secure: true,
    sameSite: 'strict',
  });
};

export const getCookie = (key: string) => {
  return Cookies.get(key);
};

export const removeCookie = (key: string) => {
  return Cookies.remove(key);
};
