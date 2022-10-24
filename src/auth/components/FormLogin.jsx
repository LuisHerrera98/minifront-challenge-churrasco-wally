import { useForm } from "../hooks/useForm";

export const FormLogin = () => {

  const {email, password, onImputChange, validateEmail, validatePassword, isDisabled, login, hasError} = useForm({
    email: "",
    password: ""
  });

  return (
    <div className="container__form">
      <form onSubmit={(e) => login(e)}>
        <h2>Inicia sesión en Wally</h2>

        <label htmlFor="email">Correo</label>
        <input
            id="email"
            type="text"
            placeholder="Escribe tu correo"
            name="email"
            value={email}
            onChange={onImputChange}
        />

        <div className="container-error">
          { !validateEmail &&
            <p className="form-error">Agregar un correo válido</p>
          }
        </div>

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Escribe tu contraseña"
          name="password"
          value={password}
          onChange={onImputChange}
        />
        <div className="container-error">
          { !validatePassword &&
            <p className="form-error">
            Mínimo 6 caracteres
            </p>
          }
        </div>

        
          { hasError ? (
            <div className="container-error-response">
              <p>{hasError}</p>
            </div>
          ): null
          }
        


        <button disabled ={isDisabled} className={isDisabled ? 'disabled' : 'button'}>Inicia Sesión</button>
      </form>
    </div>
  );
};
