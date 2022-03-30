import { useEffect, useState } from "react";

import type { GetStaticProps, NextPage } from "next";

import { Container } from "./styles";

import { CarList, ScrollTop } from "@components/index";

import cars from "@data/cars.json";

import { ICarsResponse } from "@interfaces/carInterfaces";

const HomePage: NextPage<{ cars: ICarsResponse[] }> = ({ cars }) => {
  const [isDisplay, setIsDisplay] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsDisplay(true);
    } else {
      setIsDisplay(false);
    }
  };

  const scrollTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <CarList cars={cars} />
      {isDisplay && <ScrollTop onClick={scrollTopHandler} />}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cars,
    },
    revalidate: 600,
  };
};

export default HomePage;
