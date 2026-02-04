import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";
import Swal from "sweetalert2";
import Input from "./Input";

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login({
        email: data.email.trim().toLowerCase(),
        password: data.password,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: error.message,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h1 className="login-title">Iniciar sesión</h1>

        <Input
          label="Correo electrónico"
          type="email"
          placeholder="correo@ejemplo.com"
          className="input-login"
          name="email"
          register={register}
          rules={{
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "El formato del correo no es válido",
            },
          }}
          error={errors.email}
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="********"
          className="input-login"
          name="password"
          register={register}
          rules={{
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "Debe tener al menos 6 caracteres",
            },
          }}
          error={errors.password}
        />

        <Button
          type="submit"
          className="login-button"
          disabled={isSubmitting}
          texto={isSubmitting ? "Ingresando..." : "Ingresar"}
        />
      </form>
    </div>
  );
};

export default LoginForm;
