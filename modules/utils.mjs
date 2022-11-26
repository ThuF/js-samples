const getMessage = () => {
    return "Hello World";
};

export {
    getMessage,
}
export * from "@dirigible/security";
export { response as default } from "@dirigible/http";