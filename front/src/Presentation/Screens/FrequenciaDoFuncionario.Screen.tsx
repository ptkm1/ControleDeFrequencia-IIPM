import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { API } from "Infrastructure/APIS";
import { LayoutOne } from "Presentation/Layouts/Layout1";
import Table from "Presentation/Components/Organisms/Table";
import { useParams } from "react-router-dom";

function FrequenciaDoFuncionarioScreen() {
  const [frequencia, setFrequencia] = useState<any>();
  const { id }: any = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await API.get(`/frequencia/servidor/${id}`);
      const data2 = data.map((obj: any) => {
        obj.Coordenador = obj.Coordenador && obj.Coordenador.nome;
        obj.Funcionario = obj.Funcionario && obj.Funcionario.nome;
        return obj;
      });
      setFrequencia(data2);
    })();
  }, [id]);

  return (
    <LayoutOne>
      <div>
        <Typography variant="h5" >Frequência de {frequencia?.[0].Servidor.nome}</Typography>
        <Box component="span" sx={{ display: 'block' }}>Endereço: {frequencia?.[0].Servidor.endereco}</Box>
        <Box component="span" sx={{ display: 'block' }}>Cargo: {frequencia?.[0].Servidor.cargo}</Box>
        <Box component="span" sx={{ display: 'block' }}>Matricula: {frequencia?.[0].Servidor.matricula}</Box>
        <hr />
        <Table
          data={frequencia}
          contents={[
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
          ]}
        />
      </div>
    </LayoutOne>
  );
}

export default FrequenciaDoFuncionarioScreen;
