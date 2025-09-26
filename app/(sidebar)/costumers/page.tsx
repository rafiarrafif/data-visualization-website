import EmailProvider from "@/features/customers/ui/widgets/EmailProvider";
import EmailProviderLoading from "@/features/customers/ui/widgets/EmailProvider.loading";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Suspense fallback={<EmailProviderLoading />}>
          <EmailProvider />
        </Suspense>
        <Suspense fallback={<EmailProviderLoading />}>
          <EmailProvider />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
