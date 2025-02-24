"use client";

import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignatureInput from "react-esign";
import { useState } from "react";
import SignatureControls, {
  SignatureControlsProps,
} from "../components/SignatureControls";
import CodePreview from "../components/CodePreview";
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
      h4: {
        fontSize: "1.25rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
    },
  });

  const handleControlChange = <T extends keyof SignatureControlsProps>(
    key: T,
    value: SignatureControlsProps[T]
  ) => {
    switch (key) {
      case "isDisabled":
        setIsDisabled(value as boolean);
        break;
      case "isError":
        setIsError(value as boolean);
        break;
      case "themeColor":
        setThemeColor(value as string);
        break;
      case "strokeWidth":
        setStrokeWidth(value as number);
        break;
      case "inputMode":
        setInputMode(value as "draw" | "type" | "auto");
        break;
      case "buttonType":
        setButtonType(value as "button" | "text");
        break;
      case "isDownload":
        setIsDownload(value as boolean);
        break;
      case "isClear":
        setIsClear(value as boolean);
        break;
    }
  };

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
        <Typography variant="h4" sx={{ textAlign: "center", maxWidth: 600 }}>
          react-esign is a lightweight, dependency-free React component built
          for capturing handwritten signatures. It provides a simple and
          responsive signature pad, perfect for e-signatures, form
          authentication, or user confirmations in React applications
        </Typography>
      </Box>

      <Box>
        <Box
          sx={{
            height: "100%",
            margin: "0 auto",
            minHeight: "200px",
          }}
          className="demo-container w-fit"
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

      {/* Columns */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "stretch",
          justifyContent: "space-between",
          marginTop: 5,
          marginBottom: 12,
        }}
      >
        <SignatureControls
          isDisabled={isDisabled}
          isError={isError}
          isDownload={isDownload}
          isClear={isClear}
          themeColor={themeColor}
          strokeWidth={strokeWidth}
          inputMode={inputMode}
          buttonType={buttonType}
          onControlChange={handleControlChange}
        />
        <Box sx={{ flex: 1 }}>
          <CodePreview
            isDisabled={isDisabled}
            isError={isError}
            isDownload={isDownload}
            isClear={isClear}
            themeColor={themeColor}
            strokeWidth={strokeWidth}
            inputMode={inputMode}
            buttonType={buttonType}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
