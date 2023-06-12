import { useEffect, useState } from "react";
import { http } from "../components/AuthUser";

export const loadAllCategories = () => {
  // const http = BaseConfig()
  return http.get(`/api/building/allBuildings`).then((respone) => {
    return respone.data;
  });
};

export const forgotPassword = (otp, email, newPassword) => {
  // const http = BaseConfig()
  return http
    .post(
      `/api/v1/auth/verify?otp=${otp}&email=${email}&newPassword=${newPassword}`
    )
    .then((response) => {
      return response.data;
    });
};

export const addFloors = (buildingId, floorData) => {
  // const http = BaseConfig()
  return http
    .post(`/api/building/addFloor/${buildingId}`, floorData)
    .then((response) => {
      console.log(floorData);
      return response.data;
    })
    .catch((error) => {
      console.log(floorData);
      window.alert("data not posted");
    });
};
