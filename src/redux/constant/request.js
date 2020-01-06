export const Host =
  process.env.NODE_ENV === "development"
    ? "https://xlu-api.julu666.com"
    : "https://xlu-api.julu666.com";

export const Version = "/v1";

export const Products = Host + Version + "/product/list";
export const CreateTaobaoPwd = Host + Version + "/product/tpwd";
