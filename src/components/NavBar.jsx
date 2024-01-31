import React from "react";
import Dark from "../components/DarkMode";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
} from "@mui/material";

const pages = ["Ultimos Lanzamientos", "popular", "Buscador"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e1e1e", height: "80px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "whiteSmoke" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Box m={2}>
                <img
                  src="src\assets\entrada-de-cine.png"
                  alt="entrada-de-cine"
                  width={60}
                  height={60}
                />
              </Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <h5>Movies Finder</h5>
              </Typography>
            </Box>
          </Link>

          <Box
            marginLeft={70}
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "whiteSmoke",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Home
              </Button>
            </Link>
            {pages.map((page) => (
              <Link
                to={`/${page === "Ultimos Lanzamientos" ? "ultimoslanzamientos" : page.toLowerCase()}`}
                key={page}
                style={{
                  textDecoration: "none",
                  color: "whiteSmoke",
                }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            <Link
              to="/buscador"
              style={{
                textDecoration: "none",
                color: "whiteSmoke",
              }}
            >
            </Link>
            <Dark />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}