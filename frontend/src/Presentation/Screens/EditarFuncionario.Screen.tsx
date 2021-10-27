import { FlexRow } from "../Layouts/Grids/Flex";
import { LayoutOne } from "../Layouts/Layout1";
import Button from "../UiKit/Atoms/Button";
import { Input } from "../UiKit/Atoms/Input";

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { API } from "Infrastructure/APIS";
import { useParams } from "react-router-dom";

type Inputs = {
  nome?: string;
  rg?: string;
  matricula?: string;
  cargo?: string;
  status?: string;
  endereco?: string;
  telefone?: string;
  telefone2?: string;
  telefone3?: string;
  data_de_nascimento?: string;
};

function EditarServidorScreen() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [servidor, setServidor] = useState<any>([{}]);
  const { id }: any = useParams();

  useEffect(() => {
    (async () => {
      const { data: servidor } = await API.get(`/servidor/${id}`);
      setServidor(servidor);
    })();
  }, [id]);

  return (
    <LayoutOne>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexRow>
          <Input
            title="Nome"
            reg={{ ...register("nome") }}
            defaultValue={servidor?.nome}
          />
          <Input
            type="text"
            title="RG"
            name="RG"
            reg={{ ...register("rg") }}
            defaultValue={servidor?.rg}
          />
          <Input
            type="text"
            title="Matricula"
            name="Matricula"
            reg={{ ...register("matricula") }}
            defaultValue={servidor?.matricula}
          />
        </FlexRow>
        <FlexRow>
          <Input
            type="text"
            title="Cargo"
            name="Cargo"
            reg={{ ...register("cargo") }}
            defaultValue={servidor?.cargo}
          />
          <Input
            type="text"
            title="Status"
            name="Status"
            reg={{ ...register("status") }}
          />
          <Input
            type="text"
            title="Endereço"
            name="Endereço"
            reg={{ ...register("endereco") }}
            defaultValue={servidor?.endereco}
          />
        </FlexRow>
        <FlexRow>
          <Input
            type="text"
            title="Telefone"
            name="Telefone"
            reg={{ ...register("telefone") }}
            defaultValue={servidor?.telefone}
          />
          <Input
            type="text"
            title="Telefone 2"
            name="Telefone 2"
            reg={{ ...register("telefone2") }}
          />
          <Input
            type="text"
            title="Telefone 3"
            name="Telefone 3"
            reg={{ ...register("telefone3") }}
          />
          <Input
            type="date"
            title="Data de Nascimento"
            name="Data de Nascimento"
            reg={{ ...register("data_de_nascimento") }}
            defaultValue={new Date(
              servidor?.data_de_nascimento
            ).toLocaleString()}
          />
        </FlexRow>
        <FlexRow style={{ marginTop: 20 }}>
          <Button text="Confirmar" height="45px" type="submit" />
          <Button text="Voltar" height="45px" />
        </FlexRow>
      </form>
    </LayoutOne>
  );
}

export default EditarServidorScreen;
