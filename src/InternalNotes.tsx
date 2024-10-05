import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
// const SuspenseMessage = React.lazy(() => import('./SuspenseMessage'));
const InternalNotes: React.FC = () => {
  const [text, setText] = useState("");
  const characterLimit = 20;
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (newText.length <= characterLimit) {
      setText(newText);
    }
  };
  const handleTextClear = () => {
    setText("");
  };
  const handleAddText = () => {
    const textToAdd = `Template added`;
    const newText = text + textToAdd;
    if (newText.length <= characterLimit) {
      setText(newText);
    } else {
      const availableSpace = characterLimit - text.length;
      setText(text + textToAdd.slice(0, availableSpace));
    }
  };
  return (
    <Box className="tw-mx-5 tw-my-5">
      <TextField
        multiline
        label="Internal Notes"
        rows={10}
        value={text}
        onChange={handleTextChange}
        variant="outlined"
        fullWidth
        placeholder="Type here..."
      />
      <Box>
        <Typography variant="caption">
          {`Limit ${text.length}/${characterLimit} characters`}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1} mb={1}>
        <Button variant="text" onClick={handleAddText}>
          Add Template
        </Button>
        <Button variant="text" onClick={handleTextClear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};
export default InternalNotes;
