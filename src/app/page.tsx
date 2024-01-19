import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {

  return (
    <main>
      <form action="submit">
        <label htmlFor="email"> Correo electronico de DaCodes </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password"> Contraseña </label>
        <input type="password" id="password" name="password" />
        <button type="submit"> Crear cuenta </button>
      </form>
    </main>
  );
}
