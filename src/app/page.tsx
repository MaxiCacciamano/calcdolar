"use client"
import { useState } from 'react';
import Form from './Components/Form'
import Cotizaciones from'./Cotizaciones.json';

export default function Home() {
  const[amount, setAmount] = useState(0);
  return (
    <main className="gap-8 grid ">
      <section className="flex-[0.60]"> 
        <Form value={amount} onChange={(_amount:number)=>setAmount(_amount)}/>
      </section> 
      <section className="bg-emerald-700 flex-1 rounded-3xl p-8 text-white">
        <ul className='flex flex-col gap-4'>
        {Object.entries(Cotizaciones).map(
          ([name, value]: [string, {compra: number, venta:number }])=>{
            const total = amount?Number(amount/value.venta): value.venta
            return (
              <li key={name} className='flex gap-4 items-center justify-between'>
                <div className=' text-emerald-100'>
                  {name}
                </div>
                <div className='flex items-center gap-4'>
                  <div>
                  {amount?(<div className='text-xl font-bold text-emerald-500'>
                  {Number(total).toLocaleString("es-AR", {style: 'currency', currency:"ARS" })}
                </div>):null}
                  </div>
                <div className='text-emerald-300 text-3xl font-bold'>
                  {Number(value.venta).toLocaleString("es-AR", {style: 'currency', currency:"ARS" })}
                </div>
                </div>
              </li>

            )
          }
        )}
        </ul>
      </section>
    </main>
  );
}
