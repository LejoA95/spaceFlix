/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import styled from "@emotion/styled";

import { ApiContext } from "../../context";
import CardVideo from "../cardVideo/page";
import { useFavoriteContext } from "../../context/favoriteContext";

export default function SectionVideo() {
    const { getMovies, getGenres } = useContext(ApiContext);
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [groupedMovies, setGroupedMovies] = useState({});

    const { favorite } = useFavoriteContext();

    useEffect(() => {
        const GetMovies = async () => {
            try {
                const { data } = await getMovies(`/trending/tv/day?page=1`, 'GET');
                // const { data } = await getMovies(`discover/movie?page=1`, 'GET');

                const sortedMovies = data.results.sort((a, b) => b.vote_average - a.vote_average);

                setMovies(sortedMovies);
            } catch (error) {
                console.log(error);
            }
        };

        const GetGenres = async () => {
            try {
                const { data } = await getGenres(`/trending/movie/day?page=1`, 'GET');
                setGenres(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        GetMovies();
        GetGenres();
    }, [getMovies, getGenres]);
    console.log(movies)


    return (
        <Grid container>
            <Grid container sx={{ width: '100%' }}>
                <Grid xs={12} sx={{ mt: 3, mb: 2 }}>
                    <Container maxWidth='xxl' sx={{ zIndex: '200', display: 'flex', flexDirection: 'column', gap: '.5em', overflow: "hidden" }}>
                        <Typography variant="h4" color='primary.contrastText' zIndex={1000} fontWeight={500} mb={1.5}>Películas más populares</Typography>
                    </Container>
                </Grid>
                <Grid xs={12} sx={{ mb: 2, position: 'relative' }}>
                    <Container maxWidth='xxl' sx={{ zIndex: '200' }}>
                        <Splide aria-label="My Favorite Images"
                            options={{
                                fixedWidth: '10rem',
                                fixedHeight: 'auto',
                                pagination: false,
                                // arrows: videoData[category].length > 2,
                                gap: '.6rem',
                            }}
                            className="custom-splide"
                        >
                            {genres.map((movie, index) => (
                                <CardVideo
                                    key={index}
                                    capa={movie.poster_path}
                                    title={movie.original_title}
                                    idVideo={movie.id}
                                    category={movie.genre_ids}
                                    description={movie.overview}
                                />
                            ))}
                        </Splide>
                    </Container>
                </Grid>
            </Grid>
            <Grid container sx={{ width: '100%' }}>
                <Grid xs={12} sx={{ mt: 3, mb: 2 }}>
                    <Container maxWidth='xxl' sx={{ zIndex: '200', display: 'flex', flexDirection: 'column', gap: '.5em', overflow: "hidden" }}>
                        <Typography variant="h4" color='primary.contrastText' zIndex={1000} fontWeight={500} mb={1.5}>Series más populares</Typography>
                    </Container>
                </Grid>
                <Grid xs={12} sx={{ mb: 2, position: 'relative' }}>
                    <Container maxWidth='xxl' sx={{ zIndex: '200' }}>
                        <Splide aria-label="My Favorite Images"
                            options={{
                                fixedWidth: '10rem',
                                fixedHeight: 'auto',
                                pagination: false,
                                // arrows: videoData[category].length > 2,
                                gap: '.6rem',
                            }}
                            className="custom-splide"
                        >
                            {movies.map((movie, index) => (
                                <CardVideo
                                    key={index}
                                    capa={movie.poster_path}
                                    title={movie.original_name}
                                    idVideo={movie.id}
                                    category={movie.genre_ids}
                                    description={movie.overview}
                                />
                            ))}
                        </Splide>
                    </Container>
                </Grid>
            </Grid>

            {/* {favorite && favorite.length > 0 && (
                <Grid container sx={{ width: '100%' }}>
                    <Grid xs={12} sx={{ mt: 3, mb: 2 }}>
                        <Container maxWidth='xxl' sx={{ zIndex: '200', display: 'flex', flexDirection: 'column', gap: '.5em', overflow: "hidden" }}>
                            <Typography variant="h4" color='primary.contrastText' fontWeight={500} mb={1.5}>Favoritos</Typography>
                        </Container>
                    </Grid>
                    <Grid xs={12} sx={{ mb: 2, position: 'relative' }}>
                        <Container maxWidth='xxl' sx={{ zIndex: '200' }}>
                            <Splide aria-label="My Favorite Images"
                                options={{
                                    fixedWidth: '17.5rem',
                                    fixedHeight: 'auto',
                                    pagination: false,
                                    gap: '.6rem',
                                }}
                                className="custom-splide"
                            >
                                {favorite.map((video, index) => (
                                    <CardVideo
                                        key={index}
                                        capa={video.capa}
                                        title={video.title}
                                        idVideo={video.id}
                                        category={video.category}
                                        description={video.description}
                                    />
                                ))}
                            </Splide>
                        </Container>
                    </Grid>
                </Grid>
            )}
            {Object.keys(videoData).map((category, index) => (
                <Grid container key={index} sx={{ width: '100%' }}>
                    <Grid xs={12} sx={{ mt: 3, mb: 2 }}>
                        <Container maxWidth='xxl' sx={{ zIndex: '200', display: 'flex', flexDirection: 'column', gap: '.5em', overflow: "hidden" }}>
                            <Typography variant="h4" color='primary.contrastText' fontWeight={500} mb={1.5}>{category}</Typography>
                        </Container>
                    </Grid>
                    <Grid xs={12} sx={{ mb: 2, position: 'relative' }}>
                        <Container maxWidth='xxl' sx={{ zIndex: '200' }}>
                            <Splide aria-label="My Favorite Images"
                                options={{
                                    fixedWidth: '17.5rem',
                                    fixedHeight: 'auto',
                                    pagination: false,
                                    arrows: videoData[category].length > 2,
                                    gap: '.6rem',
                                }}
                                className="custom-splide"
                            >
                                {videoData[category].map((video, index) => (
                                    <CardVideo
                                        key={index}
                                        capa={video.capa}
                                        title={video.title}
                                        idVideo={video.id}
                                        category={video.category}
                                        description={video.description}
                                    />
                                ))}
                            </Splide>
                        </Container>
                    </Grid>
                </Grid>
            ))} */}
        </Grid>
    )
}