import * as path from 'path';
import dotenv = require('dotenv');
process.env.ROOT = path.join(__dirname,'../../');
const result = dotenv.config()
if(result.error) {
  throw result.error;
}
const globalConfig = {
  ENV: process.env.ENV ? process.env.ENV : 'development'
}
if(globalConfig.ENV == 'production') {
  const result = dotenv.config({ path: path.join(__dirname, `../../.env.${globalConfig.ENV}` ) })
  if(result.error) {
    throw result.error;
  }
}
const extraConfig = {
  PORT: process.env.PORT ? process.env.PORT : 3000
}
export const config  = {
  ...globalConfig,
  ...extraConfig
};
  
