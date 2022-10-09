import { Container, Parcelas } from "./styled";

const Input = ({ label, isParcelas = false, name, register, error, ...rest }) => {
  return (
    <Container>
      <div>{label} {!! error && <span> - {error}</span>}</div>
      <input {...register(name)} {...rest} />
      {isParcelas ? (
        <Parcelas>
          <p>Máximo de 12 pacelas</p>
        </Parcelas>
      ) : null}
    </Container>
  );
};

export default Input;
