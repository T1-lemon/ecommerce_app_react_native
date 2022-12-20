import requestApi from "../constant/requestApi";

export const getAllProductService = async () => {
  try {
    const respone = await requestApi({
      method: "get",
      url: "product",
    });
    return respone;
  } catch (error) {
    return error;
  }
};

export const getDetailService = async (id) => {
  console.log(id)
  try {
    const respone = await requestApi({
      method: "get",
      url: `product/${id}`,
    });
    return respone;
  } catch (error) {
    return error;
  }
};
