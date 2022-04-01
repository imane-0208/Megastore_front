import { Pagination, Skeleton } from '@mui/material'
import React from 'react'

export const AllProductsStore = () => {
  return (
    <div className="p-5 border-black mt-4 border-4 border-dashed rounded-md">
        <div className="w-full">
          <h3 className="text-2xl">All Products</h3>
        </div>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex justify-between  items-center p-2 w-[800px] h-fit   "
            >
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-gray-200 px-4 pb-3">
                    <Skeleton className=" w-24 h-24 mt-0" animation={"wave"} />
                    <Skeleton className="h-full w-24" animation={"wave"} />
                    <Skeleton className="h-full w-6" animation={"wave"} />
                  </div>
                ))}
            </div>
          ))}
          <div className="w-full flex justify-center">
          <Pagination count={10} color="primary" />
          </div>
      </div>
  )
}
