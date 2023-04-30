import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import { validarApellido, validarNombre, validarTelefono } from "./DatosPersonales/validaciones";
import { validarInput } from "./DatosEntrega/validaciones";

const Form = () => {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})

  useEffect(() => {
    console.log("UseEffect")
  })

  useEffect(() => {
    console.log("Se ha actualizado el step: ", step)
  }, [step])

  /*  useEffect(() => {
     async function fetchData() {
       try {
         const data = await fetch('https://jsonplaceholder.typicode.com/posts')
         const posts = await data.json()
         console.log(posts)
       } catch (e) { }
     }
     fetchData()
   }, []) */

  const updateStep = (step) => {
    console.log("Actualizar paso", step)
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log("newStep", newStep)
    console.log(step)
  }

  const handleChange = (element, position, currentStep, validator) => {
    const valid = validator(value)
    const value = element.target.value

  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingrese un correo electrónico válido",
          validator: validarEmail
          //onSubmit,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida,al menos 8 caracteres y máximo 20 caracteres",
          validator: validarPassword
        }
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un mínimo de 2 caracteres y máximo 30 caracteres",
          validator: validarNombre
          //onSubmit,
        },
        {
          label: "Apellidos",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un mínimo de 2 caracteres y máximo 50 caracteres",
          validator: validarApellido
        },
        {
          label: "Teléfono",
          type: "number",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa mínimo 8 digitos y máximo 10",
          validator: validarTelefono
        }
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    2: {
      inputs: [
        {
          label: "Direccion",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una direccion válida",
          validator: validarInput
          //onSubmit,
        },
        {
          label: "Ciudad",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una ciudad válido",
          validator: validarInput
        },
        {
          label: "Estado",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un estado válido",
          validator: validarInput
        }
      ],
      buttonText: "Crear cuenta",
      onSubmit,
    }
  }
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {(step < 3) && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
