import { Content } from "./styles";

import { CarItem } from "@components/index";

import { ICarsResponse } from "@interfaces/carInterfaces";

const CarList: React.FC<{ cars: ICarsResponse[] }> = ({ cars }) => {
  return (
    <Content>
      {cars.map((car) => {
        const { id } = car;
        return <CarItem key={id} carData={car} />;
      })}
    </Content>
  );
};

export default CarList;
