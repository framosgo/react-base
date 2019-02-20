
import { http, env } from 'base';

export const loginRequest = async () => {
  try {
    // await http.get(`${env.API.LOGIN_GET}`);
    await http.post(`${env.API.LOGIN_POST}`);
  } catch (error) {
    console.error(error);
  }
};
