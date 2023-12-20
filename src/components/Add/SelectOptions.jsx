import React from "react";
import { MenuItem, Select } from "@mui/material";

const SelectOptions = ({ value, onChange}) => {
  return (
    <Select name="time" value={value} onChange={onChange}>
      <MenuItem key="canada" value="10-12am">
        10-12am
      </MenuItem>
      <MenuItem key="japan" value="12-2pm">
        12-2pm
      </MenuItem>
      <MenuItem key="germany " value="12-4pm">
        12-4pm
      </MenuItem>
      <MenuItem key="switzerland " value="12-6pm">
        12-6pm
      </MenuItem>
      <MenuItem key="australia " value="12-8pm">
        12-8pm
      </MenuItem>
      <MenuItem key="united_states " value="8-10pm">
        8-10pm
      </MenuItem>
      <MenuItem key="united_states_34 " value="10-12am">
        10-12am
      </MenuItem>
    </Select>
  );
};

export default SelectOptions;
