import {
  FormControlLabel,
  FormGroup,
  Switch,
  Select,
  MenuItem,
} from "@mui/material";
import { CirclePicker, ColorResult } from "react-color";

interface SignatureControlsProps {
  isDisabled: boolean;
  isError: boolean;
  isDownload: boolean;
  isClear: boolean;
  themeColor: string;
  inputMode: "draw" | "type" | "auto";
  buttonType: "button" | "text";
  onControlChange: <T extends keyof SignatureControlsProps>(
    key: T,
    value: SignatureControlsProps[T]
  ) => void;
}

const SignatureControls = ({
  isDisabled,
  isError,
  isDownload,
  isClear,
  themeColor,
  inputMode,
  buttonType,
  onControlChange,
}: SignatureControlsProps) => {
  return (
    <FormGroup sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isDisabled}
              onChange={(e) => onControlChange("isDisabled", e.target.checked)}
            />
          }
          label="Disabled"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isError}
              onChange={(e) => onControlChange("isError", e.target.checked)}
            />
          }
          label="Error"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isDownload}
              onChange={(e) => onControlChange("isDownload", e.target.checked)}
            />
          }
          label="Download"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isClear}
              onChange={(e) => onControlChange("isClear", e.target.checked)}
            />
          }
          label="Clear"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div>Theme Color</div>
        <CirclePicker
          color={themeColor}
          onChange={(color: ColorResult) =>
            onControlChange("themeColor", color.hex)
          }
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div>Input Mode</div>
        <Select
          value={inputMode}
          onChange={(e) =>
            onControlChange(
              "inputMode",
              e.target.value as "auto" | "type" | "draw"
            )
          }
          size="small"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="draw">Draw</MenuItem>
          <MenuItem value="type">Type (experimental)</MenuItem>
          <MenuItem value="auto">Auto (experimental)</MenuItem>
        </Select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div>Button Type</div>
        <Select
          value={buttonType}
          onChange={(e) =>
            onControlChange("buttonType", e.target.value as "button" | "text")
          }
          size="small"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="button">Button</MenuItem>
          <MenuItem value="text">Text</MenuItem>
        </Select>
      </div>
    </FormGroup>
  );
};

export default SignatureControls;
export type { SignatureControlsProps };
