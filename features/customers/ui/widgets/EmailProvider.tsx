import React from "react";
import EmailProviderCard from "../components/EmailProviderCard";
import { getCustomerEmailProviderData } from "../../model/getCustomerEmailProviderData";

const EmailProvider = async () => {
  const providerData = await getCustomerEmailProviderData();
  return (
    <div className="flex-1">
      <EmailProviderCard data={providerData} />
    </div>
  );
};

export default EmailProvider;
