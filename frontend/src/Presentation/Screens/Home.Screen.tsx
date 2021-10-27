import { FlexRow } from "../Layouts/Grids/Flex";
import { LayoutOne } from "../Layouts/Layout1";
import Button from "../UiKit/Atoms/Button";

import { FaCalendarCheck, FaTruckMoving, FaCity, FaMap } from "react-icons/fa";

function HomeScreen() {
  return (
    <LayoutOne>
      <FlexRow style={{ paddingTop: 60 }}>
        <Button
          width="50%"
          height="80px"
          text="Posto do Interior"
          icon={<FaMap />}
          onClick={() => (window.location.href = "/postos/tipo/interior")}
        />
        <Button
          width="50%"
          height="80px"
          text="Posto da Capital"
          icon={<FaCity />}
          onClick={() => (window.location.href = "/postos/tipo/capital")}
        />
        <Button
          width="50%"
          height="80px"
          text="Posto Móvel"
          icon={<FaTruckMoving />}
          onClick={() => (window.location.href = "/postos/tipo/movel")}
        />
        <Button
          width="50%"
          height="80px"
          text="Frequência"
          icon={<FaCalendarCheck />}
          onClick={() => (window.location.href = "/frequencia")}
        />
      </FlexRow>
    </LayoutOne>
  );
}

export default HomeScreen;
