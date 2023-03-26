import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import OurlitIcon from './OurlitIcon';
import { TextInputProps } from './types/types';

import './styles/inputs.css';


export const OurlitTextInput = ({
    label, value, variant, onChange, style,
    rows, error, helperText, multiline 
}: TextInputProps) => {

  const [text, setText] = useState(value ? value : '');
  
  const labelInUse = label ? label : '';
  const variantInUse = variant ? variant : 'standard';
  const rowsInUse = rows ? rows : 1;
  const helperTextInUse = error ? helperText : undefined;

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
    onChange && onChange(newText);
  };

  return (
    <TextField
      sx={style}
      label={labelInUse}
      value={text}
      onChange={onTextChange}
      variant={variantInUse}
      rows={rowsInUse}
      error={error}
      helperText={helperTextInUse}
      multiline={multiline}
    />
  );
};

export const OurlitMessageInput = ({
    label, value, variant, onChange, style,
    rows, error, helperText 
}: TextInputProps) => {

    const rowsInUse = rows ? rows : 2;
    
    return (
        <div className="message-input">
            <OurlitTextInput
                label={label}
                value={value}
                onChange={onChange}
                style={style}
                variant={variant}
                rows={rowsInUse}
                error={error}
                helperText={helperText}
                multiline
            />
            <OurlitIcon size="20" type="send" />
        </div>
    );
};
