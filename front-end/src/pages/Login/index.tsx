import Logo from "../../components/Global/Logo";
import { Container } from "./styles";

const Login = () => {
  return (
    <>
      <Logo />
      <Container>
        <div className="card">
          <p>Login</p>
          <form action="">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <div className="div-checkbox">
              <span>Remember me</span>
              <input className="ipt-checkbox" type="checkbox" name="" id="" />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
