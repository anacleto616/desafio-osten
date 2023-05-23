import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>
        <span className="company">
          Company
        </span>
        <span className="registration">
          Registration
        </span>
      </h1>
    </Container>
  )
}
