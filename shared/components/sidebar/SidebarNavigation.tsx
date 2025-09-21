"use client";
import { Button, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import React from "react";

const SidebarNavigation = () => {
  const route = usePathname();
  const links = [
    {
      name: "Overview",
      url: "/",
      icon: "solar:widget-4-bold",
    },
    {
      name: "Store Analytics",
      url: "/stores",
      icon: "solar:users-group-rounded-bold",
    },
    {
      name: "Customer Insights",
      url: "/costumers",
      icon: "solar:buildings-bold",
    },
    {
      name: "Product Analytics",
      url: "/products",
      icon: "solar:course-up-linear",
    },
    {
      name: "Transaction Trends",
      url: "/transactions",
      icon: "solar:shield-star-bold",
    },
    {
      name: "Export Reports",
      url: "/reports",
      icon: "solar:book-bookmark-bold",
    },
  ];
  return (
    <div className="mt-8 flex flex-col w-full gap-0.5">
      {links.map((item, index) => {
        return (
          <div className="w-full flex" key={index}>
            <div
              className={`h-auto w-2 rounded-tr-xl rounded-br-xl transition-all duration-200 ${
                route === item.url ? "bg-primary-600" : "bg-transparent"
              }`}
            />
            <Button
              color={route === item.url ? "primary" : "secondary"}
              radius="none"
              variant="light"
              className="font-semibold text-md flex-1 justify-start bg-transparent data-[hover=true]:bg-transparent opacity-100"
              as={Link}
              href={item.url}
              startContent={<Icon icon={item.icon} className="w-5 h-5" />}
              isDisabled={route === item.url}
            >
              {item.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
