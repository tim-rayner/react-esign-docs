"use client";

import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { CirclePicker } from "react-color";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignatureInput from "react-esign";
import { useState } from "react";
const HomePage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [themeColor, setThemeColor] = useState("#1976d2");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [inputMode, setInputMode] = useState<"draw" | "type" | "auto">("draw");
  const [buttonType, setButtonType] = useState<"button" | "text">("button");
  const [isDownload, setIsDownload] = useState(false);
  const [isClear, setIsClear] = useState(true);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.015em",
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.015em",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          paddingY: 10,
          paddingBottom: 5,
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          React ESign ✍🏻
        </Typography>
        <Typography variant="h2" sx={{ textAlign: "center", maxWidth: 600 }}>
          react-scribble is a lightweight, dependency-free React component built
          for capturing handwritten signatures. It provides a simple and
          responsive signature pad, perfect for e-signatures, form
          authentication, or user confirmations in React applications
        </Typography>
      </Box>

      <Box>
        <Box
          sx={{ width: "75%", height: "100%", margin: "0 auto" }}
          className="border-2 border-gray-300 rounded-md demo-container"
        >
          <SignatureInput
            onChange={() => {}}
            isDisabled={isDisabled}
            isError={isError}
            themeColor={themeColor}
            strokeWidth={strokeWidth}
            inputMode={inputMode}
            buttonType={buttonType}
            download={isDownload}
            clear={isClear}
          />
        </Box>
      </Box>

      <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
            }
            label="Disabled"
          />
          <FormControlLabel
            control={
              <Switch
                checked={isError}
                onChange={(e) => setIsError(e.target.checked)}
              />
            }
            label="Error"
          />
          <FormControlLabel
            control={
              <Switch
                checked={isDownload}
                onChange={(e) => setIsDownload(e.target.checked)}
              />
            }
            label="Download"
          />
          <FormControlLabel
            control={
              <Switch
                checked={isClear}
                onChange={(e) => setIsClear(e.target.checked)}
              />
            }
            label="Clear"
          />

          <FormControlLabel
            control={
              <CirclePicker
                color={themeColor}
                onChange={(color) => setThemeColor(color.hex)}
              />
            }
            label="Theme Color"
          />
          <FormControlLabel
            control={
              <TextField
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
              />
            }
            label="Stroke Width"
          />
          <FormControlLabel
            control={
              <Select
                value={inputMode}
                onChange={(e) =>
                  setInputMode(e.target.value as "auto" | "type" | "draw")
                }
                size="small"
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="draw">Draw</MenuItem>
                <MenuItem value="type">Type</MenuItem>
                <MenuItem value="auto">Auto</MenuItem>
              </Select>
            }
            label="Input Mode"
          />
          <FormControlLabel
            control={
              <Select
                value={buttonType}
                onChange={(e) =>
                  setButtonType(e.target.value as "button" | "text")
                }
                size="small"
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="button">Button</MenuItem>
                <MenuItem value="text">Text</MenuItem>
              </Select>
            }
            label="Button Type"
          />
        </FormGroup>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
