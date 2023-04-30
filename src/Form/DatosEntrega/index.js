import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {
  const [direccion, setDireccion] = useState({ value: "", valid: null })
  const [ciudad, setCiudad] = useState({ value: "", valid: null })
  const [estado, setEstado] = useState({ value: "", valid: null })

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
        //updateStep(3)
        console.log(direccion, ciudad, estado)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={direccion.value}
        error={direccion.valid === false}
        helperText={direccion.valid === false && "Ingresa una direccion válida"}
        onChange={(e) => {
          const direccion = e.target.value
          const valido = validarInput(direccion)
          setDireccion({ value: direccion, valid: valido })
          console.log(direccion, valido)
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ciudad.value}
        error={ciudad.valid === false}
        helperText={ciudad.valid === false && "Ingresa una ciudad válida"}
        onChange={(e) => {
          const ciudad = e.target.value
          const valido = validarInput(ciudad)
          setCiudad({ value: ciudad, valid: valido })
          console.log(ciudad, valido)
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.value}
        error={estado.valid === false}
        helperText={estado.valid === false && "Ingresa un estado válido"}
        onChange={(e) => {
          const estado = e.target.value
          const valido = validarInput(estado)
          setEstado({ value: estado, valid: valido })
          console.log(estado, valido)
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
