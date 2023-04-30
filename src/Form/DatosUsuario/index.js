import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarPassword, validarEmail } from "./validaciones";


const DatosUsuario = ({ updateStep }) => {

  const [email, setEmail] = useState({
    value: "",
    valid: null,
  })
  const [password, setPassword] = useState({
    value: "",
    valid: null,
  })

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
        if (email.valid && password.valid) {
          updateStep(1)
        } else {
          console.log("No hacer nada")
        }

      }}
    >

      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(e) => {
          const email = e.target.value
          const valido = validarEmail(email)
          setEmail({ value: email, valid: valido })
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={password.valid === false && "Ingresa una contraseña válida,al menos 8 caracteres y máximo 20 caracteres"}
        value={password.value}
        onChange={(e) => {
          const password = e.target.value
          setPassword({ value: password, valid: validarPassword(password) })
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
