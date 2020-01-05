export const Host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://xlu-api.julu666.com";

export const Version = "/v1";

export const Products = Host + Version + "/product/list";
export const CreateTaobaoPwd = Host + Version + "/product/tpwd";
