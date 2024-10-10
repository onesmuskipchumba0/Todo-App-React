/* eslint-disable no-unused-vars */

import React from 'react'

// eslint-disable-next-line react/prop-types
const InputForm = ({onClickHandler, onChangeHandler, value}) => {
  return (
    <div className='flex w-full justify-center'>
        <form className='w-full justify-between flex items-center'>
        <label htmlFor="todo-input" className='text-lg font-bold mx-4'>Todo: </label>
        <input type="text" className='h-12 w-[70%] mr-auto rounded-lg pl-4 text-gray-700' value={value} onChange={onChangeHandler} placeholder='Enter todo...' required />
        <button className='mr-8 w-[20%] bg-teal-400 h-full rounded-lg' onClick={onClickHandler}>Submit</button>
        </form>
    </div>
  )
}

export default InputForm