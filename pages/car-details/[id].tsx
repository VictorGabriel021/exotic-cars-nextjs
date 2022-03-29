import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Head from "next/head";

import CarDetails from "@components/car-details-page";

import { ICarsResponse } from "@interfaces/carInterfaces";

import cars from "@data/cars.json";

import { ParsedUrlQuery } from "querystring";

const CarDetailsPage: NextPage<{ carItem: ICarsResponse }> = ({ carItem }) => {
  const { brand, model } = carItem;

  return (
    <>
      <Head>
        <title>
          {brand} {model}
        </title>
        <meta
          name="description"
          content={`The best place to buy a ${brand} ${model} is at Exotic cars`}
        />
      </Head>
      <CarDetails carItem={carItem} />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;

  const carItem = cars.find(({ id: carId }) => carId === id);

  if (!carItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      carItem,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const newCars = cars.slice(0, 3);
  const paths = newCars.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default CarDetailsPage;
