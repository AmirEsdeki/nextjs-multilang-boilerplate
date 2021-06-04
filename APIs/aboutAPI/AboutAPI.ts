import BaseAPI from "../baseAPI/baseAPI";
import { About } from "../../types/about";

class AuthorAPI extends BaseAPI<
  About.GetFilters,
  About.Get,
  About.Post,
  About.Put
> {
  constructor() {
    super({
      suffix: "about",
      raiseInfo: false,
    });
  }
}

const AuthService = new AuthorAPI();

export default AuthService;
