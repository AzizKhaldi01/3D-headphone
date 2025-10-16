"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ThreeDCard";

export function ThreeDFloater() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="w-auto sm:w-[30rem] h-auto">
        <CardItem translateZ="50" className="w-full">
          <Image
            src="/img/sofas.png"
            height={1000}
            width={1000}
            className="w-full object-cover rounded-xl"
            alt="Sofas"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
