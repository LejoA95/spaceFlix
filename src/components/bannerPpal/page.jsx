"use client"
import Image from "next/image";
import banner from '../../assets/banner.png'
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Typography, Box } from "@mui/material";


export default function BannerPpal() {

    return (
        <Grid container>
            <Grid xs={12} maxHeight={400} overflow='hidden' position='absolute' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    src={banner}
                    alt='banner'
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        opacity: 0.3,
                    }}
                    priority
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0), #0d141a)',
                    opacity: 0.6,
                }} />
                {/* <Container maxWidth='xxl' sx={{ position: "absolute", zIndex: '200', display: 'flex', flexDirection: 'column', gap: '.5em' }}>
                    <Typography variant="h1" color='primary.contrastText' fontWeight={800}>Trailers</Typography>
                    <Typography variant="body1" color='primary.contrastText'>La mejor plataforma para guardar tus videos favoritos.</Typography>
                </Container> */}
            </Grid>
        </Grid >
    )
}