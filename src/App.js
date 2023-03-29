/* eslint no-eval: 0 */
import "./App.css";
import {BsFillCalculatorFill} from 'react-icons/bs'
//import {FiDivide} from 'react-icons/fi'
//import {RxCross1} from 'react-icons/rx'
import { useState } from "react";
//import {GrSubtract} from 'react-icons/gr'
import { evaluate } from "mathjs";
function App() {

  //declaring state
  const [number,setNumber]= useState('');

  //handleClick
  const handleClick=(e)=>{
      setNumber(number.concat(e.target.value))
  }

  //handleAllclear

  const handleAllClear=()=>{
    setNumber('');
  }


  //handlePrevClear
  const handlePrevClear=()=>{
    setNumber(number.slice(0,-1))
  }

  //answer
  const handleAnswer=()=>{
    try{
      setNumber(evaluate(number).toString())
      //setNumber(eval(number).toString());
    }catch(error){
      setNumber('Invalid please click AC');
    }
  }

  return (
    <>
      <section>
        <div className="bg-gray-900 w-96 h-full mx-auto rounded-lg overflow-hidden mt-10">
          <div className="text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2">
            <BsFillCalculatorFill/>
            <p>CALCULATOR</p>
          </div>
          {/* screen */}
          <div className="w-full h-20 ">
            <input
            type='text'
            placeholder="0"
            value={number}
            className="w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5  text-white"
            />
          </div>
          {/* keypad */}
          <div className="grid grid-cols-4 gap-2 my-10 mx-3">
            <button onClick={handleAllClear} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">AC</button>
            <button value='%'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">mod</button>
            <button onClick={handlePrevClear} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">C</button>
            <button value='/'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">/</button>

            <button value='7'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">7</button>
            <button value='8'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">8</button>
            <button value='9'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">9</button>
            <button value='*'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">*</button>

            <button value='4'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">4</button>
            <button value='5'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">5</button>
            <button value='6'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">6</button>
            <button value='-'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow ">-</button>

            <button value='1'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">1</button>
            <button value='2'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">2</button>
            <button value='3'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">3</button>
            <button value='+'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">+</button>

            <button value='00'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">00</button>
            <button value='0'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">0</button>
            <button value='.'onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">.</button>
            <button onClick={handleAnswer} className="text-white w-20 h-20 bg-indigo-500 rounded-full font-bold text-3xl flex justify-center items-center shadow">=</button>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
