import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [nombre, setNombre] = useState({ value: "", valid: null })
  const [apellido, setApellido] = useState({ value: "", valid: null })
  const [telefono, setTelefono] = useState({ value: "", valid: null })
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        updateStep(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={nombre.value}
        error={nombre.valid === false}
        helperText={nombre.valid === false && "Ingresa un mínimo de 2 caracteres y máximo 30 caracteres"}
        onChange={(e) => {
          const nombre = e.target.value
          const valido = validarNombre(nombre)
          setNombre({ value: nombre, valid: valido })

        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={apellido.value}
        error={apellido.valid === false}
        helperText={apellido.valid === false && "Ingresa un mínimo de 2 caracteres y máximo 50 caracteres"}
        onChange={(e) => {
          const apellido = e.target.value
          const valido = validarApellido(apellido)
          setApellido({ value: apellido, valid: valido })

        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={telefono.value}
        error={telefono.valid === false}
        helperText={telefono.valid === false && "Ingresa mínimo 8 digitos y máximo 10"}
        onChange={(e) => {
          const telefono = e.target.value
          const valido = validarTelefono(telefono)
          setTelefono({ value: telefono, valid: valido })

        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
