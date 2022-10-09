import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import { Box, Results, Forms, Title } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import ResultsText from "../../components/ResultsText";
import { useState, useEffect } from "react";

const Initial = () => {
  const [results, setResults] = useState({1:'0,00', 15:'0,00', 30:'0,00', 90: '0,00'});

  useEffect(() => {
    
  }, [results]);

  const schema = yup.object().shape({
    amount: yup.number().required("Campo Obrigatório!"),
    installments: yup
      .number()
      .min(0, "Não pode ser menor que 0")
      .max(12, "Não pode ser maior que 12")
      .required("Campo Obrigatório!"),
    mdr: yup.number().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api.post("/", data).then((response) => {
      setResults(response.data);
    });
  };

  return (
    <Box>
      <Forms>
        <h2>Simule seu dados</h2>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="amount"
            label="Informe o valor da Venda *"
            type="number"
            register={register}
            error={errors.amount?.message}
          />
          <Input
            name="installments"
            label="Em quantas parcelas *"
            isParcelas={true}
            type="number"
            register={register}
            error={errors.installments?.message}
          />

          <Input
            name="mdr"
            label="Informe o percentual de MDR *"
            type="number"
            register={register}
            error={errors.mdr?.message}
          />

          <button type="submit">Calcular</button>
        </form>
      </Forms>
      <Results>
        <Title>
          <h5>VOCÊ RECEBERÁ:</h5>
        </Title>
          <ResultsText text={0} result={'R$ ' + results[1]} />
          <ResultsText text={1} result={'R$ ' + results[15]} />
          <ResultsText text={2} result={'R$ ' + results[30]} />
          <ResultsText text={3} result={'R$ ' + results[90]} />

      </Results>
    </Box>
  );
};

export default Initial;
