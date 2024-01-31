import React, { useEffect, useState } from "react";
import useMovies from "../Hooks/UseMovie";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useFavorites } from "../context/FavoritesContext";

const DetailMovie = () => {
  const { id } = useParams();
  const { getData, data, getVideo } = useMovies();
  const [video, setVideo] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false);
  const [trailerError, setTrailerError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getData(id);
      const videoKey = await getVideo(id);
      setVideo(videoKey);
      if (!videoKey) {
        setTrailerError(true);
      }
    };

    fetchData();
  }, [id, getData, getVideo]);

  useEffect(() => {
   
    setIsFavoriteMovie(isFavorite(id));
  }, [id, isFavorite]);

  const handleFavoriteToggle = () => {
    if (isFavoriteMovie) {
      removeFavorite(id);
    } else {
      addFavorite({
        id: data.id,
        title: data.title,
        poster_path: data.poster_path,
      
      });
    }
    setIsFavoriteMovie((prev) => !prev);
  };

  return (
    <Box>
      {data ? (
        <Box
          display="flex"
          filter="auto"
          brightness="6%"
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Card
            sx={{
              margin: "30rem",
              width: "60%",
              marginBottom: "40px",
              mt: "50px",
              backdropFilter: "blur(10px)",
              backdropContrast: "100%",
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                backdropFilter: "auto",
                backdropContrast: "90%",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  marginLeft: "20px",
                  marginTop: "50px",
                  marginBottom: "100px",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "50%",
                  height: "600px",
                }}
              />
              <Box width="60%" height="100%">
                <Box
                  sx={{
                    marginTop: "50px",
                    backdropFilter: "auto",
                    backdropContrast: "60%",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" color="white">
                      {data.title}
                    </Typography>

                    <Typography variant="h6" py={2} color="white">
                      Descripción General:
                    </Typography>
                    <Typography variant="body1" color="white">
                      {data.overview}
                    </Typography>
                    <Typography variant="h6" mt={2} ml={1} color="white">
                      Géneros
                    </Typography>
                    <Typography variant="body2" ml={1} color="white">
                      {data.genres &&
                        data.genres.map((genre) => (
                          <span key={genre.id}>{genre.name}, </span>
                        ))}
                    </Typography>
                  </CardContent>
                </Box>
                {video && (
                  <a
                    href={`https://www.youtube.com/watch?v=${video}`}
                    target="_blank"
                    style={{ margin: "30px" }}
                  >
                    <Button
                      variant="outlined"
                      style={{ color: "#ba68c8", borderColor: "#ba68c8" }}
                    >
                      Ver Trailer
                    </Button>
                  </a>
                )}
                {trailerError && (
                  <Typography variant="body2" mt={1} ml={1} color="white">
                    Esta película no posee trailer.
                  </Typography>
                )}
                <Button
                  onClick={handleFavoriteToggle}
                  color={isFavoriteMovie ? "warning" : "inherit"}
                >
                  <StarIcon />
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      ) : null}
    </Box>
  );
};

export default DetailMovie;
