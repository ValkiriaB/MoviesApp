import React from "react";
import { Typography, Box, Grid, Pagination} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import useMovies from "../Hooks/UseMovie";
import CardMovie from "./CardMovie";

const LatestReleases = () => {
  const navigate = useNavigate();
  const { data, getData } = useMovies();

  React.useEffect(() => {
    getData("now_playing", 1);
  }, [getData]);

  const handlePageChange = (event, value) => {
    getData("now_playing", value);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={4} display="flex" justifyContent="center" sx={{ fontWeight: 'bold', color: '#ba68c8'}}>
        Últimos Lanzamientos
      </Typography>
      <Grid container spacing={3}>
        {data.results && data.results.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <CardMovie title={movie.title} poster={movie.poster_path} movieId={movie.id} />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={data.total_pages}
          page={data.page}
          onChange={handlePageChange}
          sx={{
            '& .MuiPaginationItem-page:hover': {
              backgroundColor: '#ba68c8',
              color: 'white',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default LatestReleases;
