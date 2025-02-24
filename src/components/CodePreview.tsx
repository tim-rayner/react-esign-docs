"use client";
import { Alert, Box, IconButton, Tooltip, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
      ${isDisabled ? "isDisabled={true}" : ""}
      ${isError ? "isError={true}" : ""}
      themeColor="${themeColor}"
      strokeWidth={${String(strokeWidth)}}
      ${inputMode !== "draw" ? `inputMode="${inputMode}"` : ""}
      buttonType="${buttonType}"
      ${isDownload ? "isDownload={true}" : ""}
      ${isClear ? "isClear={true}" : ""}
    />
    `
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  const handleCopy = () => {
    const codeContent = sampleJsx.join("\n");
    navigator.clipboard.writeText(codeContent);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        minWidth: 0,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        height: { xs: "300px", sm: "400px" },
        flexDirection: "column",
        gap: 2,
        px: { xs: 2, sm: 0 },
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Code Preview
      </Typography>
      <pre className="mockup-code bg-[#2f1a08] p-1 rounded-lg text-white whitespace-pre-wrap break-all w-full max-w-[500px] relative [counter-reset:line] mx-auto">
        <Tooltip title="Copy to clipboard">
          <IconButton
            onClick={handleCopy}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 10,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        {sampleJsx.map((line, index) => (
          <code
            key={index}
            lang={language}
            className="block before:content-[counter(line)] before:[counter-increment:line] before:mr-4 before:inline-block before:w-8 before:text-right before:text-gray-500"
          >
            {line}
          </code>
        ))}
      </pre>
      {(inputMode === "auto" || inputMode === "type") && (
        <Alert
          severity="warning"
          color="warning"
          sx={{
            width: "100%",
            maxWidth: "500px",
            mx: { xs: 2, sm: 0 },
            "& .MuiAlert-icon": {
              display: "flex",
              alignItems: "center",
              marginTop: 0,
            },
          }}
        >
          you&apos;re using an experimental feature, expect bugs and breaking
          changes
        </Alert>
      )}
    </Box>
  );
};

export default CodePreview;
