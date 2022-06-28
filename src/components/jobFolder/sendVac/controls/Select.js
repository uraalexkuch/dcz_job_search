import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem} from '@material-ui/core';

export default function Select(props) {

    const { name, label, value, varient, onChange, options } = props;

    return (
        <FormControl variant={varient || "outlined"}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)
                    )
                }
            </MuiSelect>
        </FormControl>
    )
}
