import { Skeleton, Switch } from '@mui/material'
import React,{FC} from 'react'

type Props = {
    setBestProducts: React.Dispatch<React.SetStateAction<boolean>>;
    bestProducts: boolean;
}

export const BestProductsStore:FC<Props> = ({bestProducts,setBestProducts}) => {
  return (
    <div
        className={`p-5 border-black mt-4 border-4 border-dashed rounded-md ${
          bestProducts ? "opacity-20" : ""
        }`}
      >
        <div className="w-full flex justify-end">
          <Switch
            onChange={() => setBestProducts(!bestProducts)}
            name="checked"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={!bestProducts}
          />
        </div>
        <div className="w-full">
          <h3 className="text-2xl">Best Products</h3>
        </div>
        <div className="flex justify-between items-center p-2 w-[800px] h-44 ">
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
      </div>
  )
}
