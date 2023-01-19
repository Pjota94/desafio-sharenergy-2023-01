import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Global/Logo";
import { ILogin } from "../../interfaces";
import api from "../../services/api";
import { Container } from "./styles";

const Login = () => {
  const textApi = async () => {
    await api.get("/api/clients").then((response) => {
      console.log(response);
    });
  };

  const { register, handleSubmit } = useForm<ILogin>();
  const navigate = useNavigate();

  const login = (data: ILogin) => {
    if (
      data.username === "desafiosharenergy" &&
      data.password === "sh@r3n3rgy"
    ) {
      navigate("/dashboard", { replace: true });
      toast.success("Successful login!");
    } else {
      toast.error("Invalid login!");
    }
  };

  return (
    <>
      <Logo />
      <Container>
        <div className="card">
          <p>Login</p>
          <form action="" onSubmit={handleSubmit(login)}>
            <label htmlFor="">Username</label>
            <input type="text" {...register("username")} required />
            <label htmlFor="">Password</label>
            <input type="password" {...register("password")} required />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
