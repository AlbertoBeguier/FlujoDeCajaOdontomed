import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Alert } from "@mui/material";
import { FormFields } from "./FormFields";
import { createCategoria } from "../../../services/categoriasService";
import { INITIAL_FORM_STATE } from "../../../config/constants";
import "./FormularioCategoria.css";

export const FormularioCategoria = ({ onCategoriaCreada, categorias }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createCategoria(formData);
      setFormData(INITIAL_FORM_STATE);
      onCategoriaCreada();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.name === "nivel" ? Number(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="formulario-categoria"
    >
      {error && (
        <Alert severity="error" className="alerta-error">
          {error}
        </Alert>
      )}

      <FormFields
        formData={formData}
        handleChange={handleChange}
        categorias={categorias || []}
      />

      <Button
        type="submit"
        variant="contained"
        className="btn-agregar-categoria"
      >
        Agregar Categoría
      </Button>
    </Box>
  );
};

FormularioCategoria.propTypes = {
  onCategoriaCreada: PropTypes.func.isRequired,
  categorias: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      codigo: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      nivel: PropTypes.number.isRequired,
      categoriaPadre: PropTypes.string,
    })
  ),
};
