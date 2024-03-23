"use client"; 
import React from 'react'

interface FormProps{
  value: number;
  onChange: (amount: number)=> void
}

function Form({value, onChange}:FormProps){
    
  return (
    <form className='w-full'>
        <label className='block space-y-2'>
            <span>
            Monto en ARS
            </span>
            <input
             className='block P-2 bg-gray-200 p-2 rounded-lg w-full text-right'
             type='number'
             value={value}
             onChange={(e) =>onChange(Number(e.target.value))}
             />
        </label>
    </form>
  )
}
export default Form
