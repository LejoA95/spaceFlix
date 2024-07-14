/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, SelectChangeEvent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonPpal, InputLight, SelectLight } from '../inputs&Buttons/page';
import image from "../../assets/banner.png"
import Image from 'next/image';
import styled from '@emotion/styled';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { ApiContext } from '../../context';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '600px',
    bgcolor: '#20282e',
    border: '2px solid #000',
    overflow: 'hidden',
    boxShadow: 24,
    borderRadius: '.5em'
};

const BoxIconsItem = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '150px',
    padding: '0 0 .5em 0',
    background: '#ffffff',
    background: '-moz-linear-gradient(180deg, #ffffff00 0%, #20282ecc 77%)',
    background: '-webkit-linear-gradient(180deg, #ffffff00 0%, #20282ecc 77%)',
    background: 'linear-gradient(180deg, #ffffff00 0%, #20282ecc 77%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff00", endColorstr="#20282ecc", GradientType=1)',
    cursor: 'pointer'
}));

const InfoVideo = ({ open,  infoVideo, capa, category, description, title }) => {
   
    const handleClose = () => {
        infoVideo(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ zIndex: '1000', backgroundColor:'#14243120' }}
        >
            <Box sx={style}>
                <Box sx={{ position: 'relative' }}>
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', right: '.3em', top: '.3em', zIndex: 200000000000 }}>
                        <CloseIcon />
                    </IconButton>
                    <Box position='relative'>
                        <img
                            src={capa}
                            alt='imagen'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                        <BoxIconsItem position='absolute' bottom='0' width='100%' className="icons_info">
                            <Typography variant="h5" color="#fff">{title}</Typography>
                            <Box>
                                <IconButton>
                                    <PlayCircleFilledWhiteOutlinedIcon fontSize='large' color="white" />
                                </IconButton>
                                <IconButton>
                                    <FavoriteBorderOutlinedIcon fontSize='large' color="white" />
                                </IconButton>
                            </Box>
                        </BoxIconsItem>
                    </Box>
                    <Box p='1em 2em 0'>
                        <Typography variant='h6' color='#ededed'>Categoría:</Typography>
                        <Typography variant='body1' color='#ededed'>{category}</Typography>
                    </Box>
                    <Box p='1em 2em 2em'>
                        <Typography variant='h6' color='#ededed'>Descripcion:</Typography>
                        <Typography variant='body1' color='#ededed'>{description}</Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default InfoVideo;