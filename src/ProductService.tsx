import React, { useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});
export const ProductService = {
  getAllProducts() {
    return client.get("/random");
  },
};

export default {};