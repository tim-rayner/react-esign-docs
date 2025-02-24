import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-4 bg-[#0f1115]">
      <Typography
        variant="body1"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "center",
        }}
      >
        React ESign is designed, developed, and maintained by{" "}
        <Link href="https://timrayner.com" target="_blank">
          Tim Rayner
        </Link>
        {" • "}
        <Link
          href="https://github.com/tim-rayner"
          target="_blank"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <GitHubIcon sx={{ fontSize: 20, mr: 0.5 }} />
          GitHub
        </Link>
      </Typography>
    </footer>
  );
};

export { Footer };
