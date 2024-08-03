import React from 'react'
import book2 from '../../public/books2.png'


function Cards({item}) {
    return (
        <>
            <div className='mt-5 my-5 p-3'>
                <div className="card bg-base-100 w-93 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={book2}
                            alt="Books" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200">Read Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
