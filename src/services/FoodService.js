import http from "../http";

const getAllFood = () => {
  return http.get("/prato/listar");
};

const createFood = (data) => {
  return http.post("/prato/criar", data);
};

const createClient = (data) => {
  return http.post("/cliente/criar", {data});
};

const updateClient = (id, data) => {
  return http.put(`/prato/${id}`, data);
};

const login = (data) => {
  return http.post("/login", data);
};

const updateFood = (id, data) => {
  return http.put(`/prato/${id}`, data);
};

const removeSingleFood = (id) => {
  return http.delete(`/prato/deletar/${id}`);
};

const getSingleFood = (id) => {
  return http.get(`/prato/${id}`);
}

export default {
  getSingleFood,
  getAllFood,
  updateClient,
  createClient,
  createFood,
  updateFood,
  removeSingleFood,
  login
};
