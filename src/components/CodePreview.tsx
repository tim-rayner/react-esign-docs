"use client";
import { Box } from "@mui/material";

type CodePreviewProps = {
  isDisabled: boolean;
  isError: boolean;
  isDownload: boolean;
  isClear: boolean;
  themeColor: string;
  strokeWidth: number;
  inputMode: "draw" | "type" | "auto";
  buttonType: "button" | "text";
};

const CodePreview = ({
  isDisabled,
  isError,
  isDownload,
  isClear,
  themeColor,
  strokeWidth,
  inputMode,
  buttonType,
}: CodePreviewProps) => {
  const language = "jsx";
  const sampleJsx = `
    <SignatureInput
      isDisabled={${String(isDisabled)}}
      isError={${String(isError)}}
      themeColor="${themeColor}"
      strokeWidth={${String(strokeWidth)}}
      inputMode="${inputMode}"
      buttonType="${buttonType}"
      isDownload={${String(isDownload)}}
      isClear={${String(isClear)}}
    />
    `;

  return (
    <Box>
      <code lang={language}>{sampleJsx}</code>
    </Box>
  );
};

export default CodePreview;
