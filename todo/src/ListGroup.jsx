/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons from the free-solid-svg-icons package
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function ListGroup({todos, updateHandler, deleteHandler}) {
  return (
    <>
    <div className='flex justify-center items-center mt-9 w-full'>
        <ol className='text-white w-full items-center'>
            <h2 className='font-bold text-xl text-center text-amber-300'>Your todos</h2>
            { todos.map((e, index) => (
                <>
                <li className='justify-between items-center flex text-lg font-semibold text-amber-200 my-3  bg-purple-800 h-12 pl-8' key={index}>{e}
                    <button className='mx-3 hover:text-amber-50 ml-auto' onClick={() => updateHandler(index)}>
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                    </button>
                    <button className='hover:text-amber-50 mr-5' onClick={() => deleteHandler(index)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </li>
                </>
            )) }
        </ol>
    </div>
    </>
  )
}

export default ListGroup