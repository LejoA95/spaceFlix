"use client"
import * as React from 'react';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TextField } from "@mui/material";

const ButtonPpal = ({ typeButton, color, size, onClickButton, iconoFinal, textButton, styleButton, full}) => {
    return (
        <Button
            variant={styleButton}
            type={typeButton}
            color={color}
            size={size}
            onClick={onClickButton}
            endIcon={iconoFinal}
            fullWidth={full}
            style={{ textTransform: 'inherit', minWidth: 'auto' }}
        >
            {textButton}
        </Button>
    );
}


const InputLight = ({ name, nameguide, color, error, helperText, onChange, nameValue, multiline, maxRows, value, disabled, textHelp, maxLength, full, focus, required }) => {
    return (
        <>
            <TextField
                label={name}
                id={nameguide}
                name={nameValue}
                placeholder={nameguide}
                variant="outlined"
                size="small"
                color={color}
                disabled={disabled}
                onChange={onChange}
                defaultValue={value}
                required={required}
                error={error}
                helperText={helperText}
                multiline={multiline}
                rows={maxRows}
                inputProps={{ maxLength: maxLength }}
                focused={focus}
                fullWidth={full}
            />
            <FormHelperText id={name} sx={{ fontSize: '15px', pl: .5, color: '#fff' }}>
                {textHelp}
            </FormHelperText>
        </>
    );
}

const SelectLight = ({ name, nameValue, value, options, disabled, required, onChangeSelect, textHelp }) => {
    return (
        <FormControl fullWidth size='small'>
            <InputLabel id={name}>{name}</InputLabel>
            <Select
                labelId={name}
                value={value}
                name={nameValue}
                label={name}
                onChange={onChangeSelect}
                required={required}
                disabled={disabled}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} sx={{ fontSize: '14px' }} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText id={name} sx={{ fontSize: '10px', pl: 0.5 }}>
                {textHelp}
            </FormHelperText>
        </FormControl>
    );
};

export { ButtonPpal, InputLight, SelectLight };