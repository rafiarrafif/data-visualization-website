import React from "react";
import CustomerCityCard from "../components/CustomerCityCard";
import { getCustomerCityData } from "../../model/getCustomerCityData";

const CustomerCity = async () => {
  const providerData = await getCustomerCityData();
  return (
    <div className="flex flex-1">
      <CustomerCityCard data={providerData} />
    </div>
  );
};

export default CustomerCity;
