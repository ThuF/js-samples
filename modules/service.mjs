import response, { getMessage, user } from "./utils.mjs";

response.println(`${getMessage()} ${user.getName()}`);