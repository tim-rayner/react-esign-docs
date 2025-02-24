"use client";

import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignatureInput from "react-esign";
import { useState } from "react";
import SignatureControls, {
  SignatureControlsProps,
} from "../components/SignatureControls";
import CodePreview from "../components/CodePreview";
import CodeBlock from "@/components/CodeBlock";
const HomePage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [themeColor, setThemeColor] = useState("#1976d2");
  const [inputMode, setInputMode] = useState<"draw" | "type" | "auto">("draw");
  const [buttonType, setButtonType] = useState<"button" | "text">("button");
  const [isDownload, setIsDownload] = useState(false);
  const [isClear, setIsClear] = useState(true);
  const strokeWidth = 2;

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
      body1: {
        fontSize: "1.25rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: "2.25rem",
        fontWeight: 500,
        lineHeight: 1.2,
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
      <div className="pb-20 flex flex-col">
        <div className="flex flex-col gap-8 items-center justify-center py-12">
          <Typography variant="h1" className="text-center">
            React ESign ✍🏻
          </Typography>
          <Typography variant="body1" className="text-center max-w-[600px]">
            react-scribble is a lightweight, dependency-free React component
            built for capturing handwritten signatures. It provides a simple and
            responsive signature pad, perfect for e-signatures, form
            authentication, or user confirmations in React applications
          </Typography>
        </div>

        <div className="flex flex-col items-center justify-center mx-auto w-fit ">
          <div className="h-full mx-auto min-h-[250px] demo-container w-full md:w-[700px] flex items-center justify-center">
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
          </div>
        </div>

        {/* Columns */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-stretch justify-between mt-20 mb-8">
          <div className="flex  top-0 flex-col gap-8 h-fit ">
            <SignatureControls
              isDisabled={isDisabled}
              isError={isError}
              isDownload={isDownload}
              isClear={isClear}
              themeColor={themeColor}
              inputMode={inputMode}
              buttonType={buttonType}
              onControlChange={handleControlChange}
            />
            <CodePreview
              isDisabled={isDisabled}
              isError={isError}
              isDownload={isDownload}
              isClear={isClear}
              themeColor={themeColor}
              inputMode={inputMode}
              buttonType={buttonType}
            />
          </div>
          <div className="flex flex-col flex-1 gap-12 md:px-8">
            <div className="flex flex-col gap-4">
              <Typography variant="h3">About</Typography>
              <Typography variant="body1">
                React ESign was designed to allow react developers to capture
                handwritten signatures in their applications with one simple
                component.
              </Typography>
            </div>
            <div className="flex flex-col gap-8">
              <Typography variant="h3">Getting Started</Typography>
              <Typography variant="body1">
                start by installing <code>react-esign</code> via npm
              </Typography>
              <CodeBlock code={`npm install react-esign`} language="bash" />

              <Typography variant="h4" className="text-start">
                Import the <code>SignatureInput</code> component and include it
                in your render function:
              </Typography>
              <CodeBlock
                code={`import SignatureInput from "react-esign";`}
                language="jsx"
              />
            </div>
            <div className="flex flex-col gap-8">
              <Typography variant="h3">Component API</Typography>
              <div className="flex flex-col gap-4">
                <Typography variant="h5">
                  Clear <small>(boolean)</small>
                </Typography>
                <Typography variant="body1">
                  Clear controls if your signature input displays a
                  &apos;clear&apos; button; which is used to clear the signature
                  input. This is useful if a mistake was made during the
                  signature input process.
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <Typography variant="h5">
                  Download <small>(boolean)</small>
                </Typography>
                <Typography variant="body1">
                  Download adds a button to the signature input that allows the
                  user to download the signature as an image.
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <Typography variant="h5">
                  Error <small>(boolean)</small>
                </Typography>
                <Typography variant="body1">
                  Error adds an error state to the signature input. Useful for
                  form validation.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
