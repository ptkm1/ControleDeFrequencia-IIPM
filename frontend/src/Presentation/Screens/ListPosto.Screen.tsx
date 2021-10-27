import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { API } from "Infrastructure/APIS";
import { LayoutOne } from "../Layouts/Layout1";

import { useParams } from "react-router";
import ContentLoader from "react-content-loader";
import Table from "Presentation/UiKit/Organisms/Table";
import Loader from "Presentation/UiKit/Organisms/Loader";

function ListPostoScreen() {
  const { id }: any = useParams();
  const [posto, setPosto]: any = useState();

  useEffect(() => {
    (async () => {
      const { data: posto } = await API.get(`/postos/${id}`);
      setPosto(posto);
      console.log(posto);
    })();
  }, [id]);

  return (
    <LayoutOne>
      <div style={{ marginTop: 50, width: "100%" }}>
        {posto ? (
          <>
            <Typography variant="h4">{posto.nome}</Typography>
            <Typography variant="subtitle1">SAC: {posto.tipoPosto}</Typography>
            <Typography variant="subtitle1">Email:{posto.email}</Typography>
            <h1>Servidores</h1>
            {posto.servidores ? (
              <Table
                data={posto.servidores}
                contents={["nome", "telefone", "matricula", "cargo", "tipoDoServidor" ]}
                url="/funcionario"
              />
            ) : (
              <Loader />
            )}
            
          </>
        ) : (
          <>
            <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="8" y="66" rx="0" ry="0" width="198" height="21" />
              <rect x="11" y="19" rx="0" ry="0" width="180" height="33" />
            </ContentLoader>
            <Loader />
          </>
        )}
      </div>
    </LayoutOne>
  );
}

export default ListPostoScreen;
