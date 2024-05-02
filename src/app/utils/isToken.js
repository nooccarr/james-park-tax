const isToken = (cookies) =>
  cookies?.token === undefined || cookies?.token === 'undefined' ? false : true;

export default isToken;
