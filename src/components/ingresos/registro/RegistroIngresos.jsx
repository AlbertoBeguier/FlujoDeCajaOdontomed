import logo from "../../../assets/odontomed512_512.png";
import logo1 from "../../../assets/odontomedBigLogo.png";
import "./RegistroIngresos.css";

export const RegistroIngresos = () => {
  return (
    <>
      <div className="pagina-ingresos-container-2">
        <img src={logo} alt="Logo" className="ingresos-logo" />
        <img src={logo1} alt="Logo1" className="ingresos-logo-1" />
        <p className="ingresos-registro-titulo">Registro de Ingresos</p>
      </div>
      <div className="pagina-ingresos-container-2">
        <p className="registro-ingresos-parrafo-1">Selección de Ingreso</p>
      </div>
    </>
  );
};
