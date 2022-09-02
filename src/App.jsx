import './style.css'
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'

export function App() {
  const [sexo, setSexo] = useState()
  const[atividadeFisica, setAtividadeFisica] = useState()
  const inputSexo = (e) => {
    setSexo(e.target.value)
  }
  const inputAtividadeFisica =(e) => {
    setAtividadeFisica(e.target.value)
  }
  return (
    <div className='container'>
      <header className='header'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          width={45}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
          />
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
          />
        </svg>
        <span>Calculadora de Calorias</span>
      </header>
      <section className='inputs'>
        <FormControl fullWidth margin="dense" >
          <InputLabel id='inputSexo'>Sexo</InputLabel>
          <Select
            labelId='inputSexo'
            id='inputSelectSexo'
            value={sexo}
            label='Sexo'
            onChange={inputSexo}
          >
            <MenuItem value={'homem'}>Homem</MenuItem>
            <MenuItem value={'mulher'}>Mulher</MenuItem>
          </Select>
        </FormControl>
        <TextField id='idade' label='Idade' type='number' fullWidth margin="dense" size=''/>
        <TextField id='peso' label='Peso' type='number' fullWidth margin="dense"/>
        <TextField id='altura' label='Altura' type='number' fullWidth margin="dense"/>
        <FormControl fullWidth margin="dense">
          <InputLabel id='inputAtividadeFisica'>Nivel de Atividade Fisica</InputLabel>
          <Select labelId='inputAtividadeFisica'
          id='inputSelectAtividadeFisica'
          value={atividadeFisica}
          label="Atividade Fisica"
          onChange={inputAtividadeFisica}
          > 
          <MenuItem value={'Sedentario'}>Sedentario</MenuItem></Select>
        </FormControl>
      </section>
    </div>
  )
}
