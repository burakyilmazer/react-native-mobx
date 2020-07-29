import {action} from "mobx";
import {request} from './common/utils';

let mainUrl = 'http://localhost:6000/api/';
class UserStore {
  @action doLogin = async (username, password) => {
    const body = {
      email: username,
      password: password
    };
    console.log(body);
    fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

const MainStore = new UserStore();
export default MainStore; 
 