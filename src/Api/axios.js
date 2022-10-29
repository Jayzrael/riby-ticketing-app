import axios from "axios";

export const BaseUrl = 'https://dev-apis.riby.ng/cus/api/v1/'

export default axios.create({
   baseURL: BaseUrl
})