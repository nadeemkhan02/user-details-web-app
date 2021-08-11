import { collegeApi } from '../utils/env';
import Axios from "axios";

export async function getUserCollegeAPI(params) {
  return Axios.get(`${collegeApi}?name=${params.searchKey}`);
}
