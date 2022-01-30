import { API } from "Infrastructure/APIS";
import { LayoutOne } from "Presentation/Layouts/Layout1";
import TableCollapse from "Presentation/Components/Organisms/TableCollapse";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

function FrequenciaScreen() {
  const [frequencia, setFrequencia] = useState();
  const [query, setQuery] = useState('')

  useEffect(() => {
    (async () => {
      const { data } = await API.get("/servidor/frequencia");
      setFrequencia(data);
    })();
  }, []);

  function Search(rows: any) {
    const columns: any = rows && rows[0] && Object.keys(rows[0])
    return rows?.filter((row: any) => {
      return columns.some(
        (column: any) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    })
  }

  return (
    <LayoutOne>
      <div style={{ width: '20vw', height: '50px', position: "absolute", top: '50px' }}>
        <TextField
          label="Pesquisar"
          variant="filled"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

    </LayoutOne>
  );
}

export default FrequenciaScreen;
