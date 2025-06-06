"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";
import Link from "next/link";
import CloudImage from "./CloudImage";

export default function ServiceCard({
  imageId,
  imageAlt,
  title,
  body,
  href,
  ...props
}) {
  return (
    <Link href={href} className="block group h-full">
      <Card
        className="flex flex-col overflow-hidden rounded-lg shadow-md bg-white h-full transition-transform group-hover:scale-[1.01]"
        {...props}
      >
        <CardHeader className="p-0">
          <div className="relative w-full  overflow-hidden">
            <CloudImage
              publicId={imageId}
              alt={imageAlt}
              ratio={3 / 2}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </CardHeader>

        <CardBody className="flex flex-col flex-1 px-4 pt-4 pb-6 bg-primary/10">
          <div className="space-y-4 flex-1">
            <h4 className="text-lg font-bold group-hover:underline">{title}</h4>
            <p className=" text-gray-600">{body}</p>
          </div>

          <div className="mt-auto pt-4 flex items-center text-accent font-medium">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
