import env from './environment';

Object.entries(env).forEach(([key, value]) => {
  process.env[key] = value;
})
