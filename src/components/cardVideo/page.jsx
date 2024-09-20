/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import styled from "@emotion/styled";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoVideo from "../infoVIdeo/page";
import { useFavoriteContext } from "../../context/favoriteContext";


const ItemCarrousel = styled(Paper)(() => ({
    overflow: 'hidden',
    borderRadius: 5,
    position: 'relative'
}));

const BoxIconsItem = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '70px',
    background: '#ffffff',
    background: '-moz-linear-gradient(180deg, #ffffff00 0%, #20282ecc 77%)',
    background: '-webkit-linear-gradient(180deg, #ffffff00 0%, #20282ecc 77%)',
    background: 'linear-gradient(180deg, #ffffff00 0%, #20282ecc 77%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff00", endColorstr="#20282ecc", GradientType=1)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    cursor: 'pointer'
}));


export default function CardVideo({ capa, idVideo, title, category, description }) {
    const { favorite, addFavoriteVideo } = useFavoriteContext();
    const isFavorite = favorite.some(fav => fav.id === idVideo);
    const icon = isFavorite ? <FavoriteIcon color="white" /> : <FavoriteBorderOutlinedIcon color="white" />;

    const [infoVideo, setInfoVideo] = useState(false);
    const [dataInfoVideo, setDataInfoVideo] = useState();

    const handleInfoVideo = (id) => {
        setInfoVideo(true);
        setDataInfoVideo(id);
    };

    return (
        <SplideSlide>
            <ItemCarrousel className="info_item">
                <img
                    src={`https://image.tmdb.org/t/p/w500${capa}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
                <BoxIconsItem position='absolute' bottom='0' width='100%' className="icons_info">
                    <Box>
                        <IconButton onClick={() => addFavoriteVideo({ idVideo, title, capa, category, description })}>
                            {icon}
                        </IconButton>
                        <IconButton onClick={() => handleInfoVideo(idVideo)}>
                            <InfoOutlinedIcon color="white" />
                        </IconButton>
                    </Box>
                </BoxIconsItem>
            </ItemCarrousel>
            <InfoVideo
                open={infoVideo}
                infoVideo={setInfoVideo}
                idVideo={dataInfoVideo}
                capa={capa}
                title={title}
                category={category}
                description={description}
            />
        </SplideSlide>
    );
}