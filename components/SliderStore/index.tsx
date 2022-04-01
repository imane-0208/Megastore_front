import React, { FC } from "react";
import { Switch } from "@mui/material";
import BackupIcon from "@mui/icons-material/Backup";

type Props = {
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
  slider: boolean;
};

export const SliderStore: FC<Props> = ({ slider, setSlider }) => {
  return (
    <div
      className={`p-5 border-black border-4 border-dashed rounded-md ${
        slider ? "opacity-20" : ""
      }`}
    >
      <div className="w-full flex justify-end">
        <Switch
          onChange={() => setSlider(!slider)}
          name="checked"
          inputProps={{ "aria-label": "secondary checkbox" }}
            checked={!slider}
        />
      </div>
      <div className="flex justify-between items-center p-4 w-[800px] h-44 bg-white shadow-lg">
        <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {"<"}
        </button>
        <span>slider</span>
        <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {">"}
        </button>
      </div>
      <div className="flex gap-3 mt-3">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="p-10 bg-gray-200 rounded border-2 border-dashed  "
              key={i}
            >
              <BackupIcon />
            </div>
          ))}
      </div>
    </div>
  );
};
