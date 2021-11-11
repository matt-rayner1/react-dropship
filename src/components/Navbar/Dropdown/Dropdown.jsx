import React, { useState } from 'react'
import {Box, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

const Dropdown = ({ setCategory }) => {
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
        setCategory(event.target.value)
    }

    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">&nbsp;&nbsp;Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Value"
                    variant="outlined"
                    onChange={handleChange}
                >
                    <MenuItem value="Men's clothing">Men's clothing</MenuItem>
                    <MenuItem value="Women's clothing">Women's clothing</MenuItem>
                    <MenuItem value="Jewelery">Jewelery</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Dropdown
