"use client";
import { Box, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language = "jsx" }: CodeBlockProps) => {
  // Split the code into lines and remove empty lines
  const codeLines = code
    .trim()
    .split("\n")
    .map((line) => line.trimStart()) // Remove leading whitespace
    .filter((line) => line !== "");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box>
      <pre className="mockup-code bg-[#031628] p-1 py-2 rounded-lg text-white whitespace-pre-wrap break-all w-full max-w-[500px] relative [counter-reset:line]">
        <Tooltip title="Copy to clipboard">
          <IconButton
            onClick={handleCopy}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
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
        {codeLines.map((line, index) => (
          <code
            key={index}
            lang={language}
            className="block before:content-[counter(line)] before:[counter-increment:line] before:mr-4 before:inline-block before:w-8 before:text-right before:text-gray-500"
          >
            {line}
          </code>
        ))}
      </pre>
    </Box>
  );
};

export default CodeBlock;
