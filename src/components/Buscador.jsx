
import React, { useState } from "react";
import { TextField, Container, Box } from "@mui/material";
import useMovies from "../Hooks/UseMovie"; 
import CardMovie from "./CardMovie";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchMovie, data, loading, error } = useMovies();

  let handleInputChange = (event) => {
    let value = event.target.value;
    setSearchTerm(value);
    searchMovie(value);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar películas"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Box>
      <Box mt={2}>
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && data.map((result) => (
          <CardMovie key={result.id} title={result.title} poster={result.poster_path} />
        ))}
      </Box>
    </Container>
  );
};

export default Buscador;
