import IUserInfo from "./IUserInfo";

interface IBearerBody {
  access_token: string;
  token_expires_in: number;
  refresh_token: string;
  token_type: string;
  user: IUserInfo;
}

export default IBearerBody;
