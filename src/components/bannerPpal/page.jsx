"use client"
import Image from "next/image";
import banner from '../../assets/banner.png'
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Typography } from "@mui/material";


export default function BannerPpal() {

    return (
        <Grid container>
            <Grid xs={12} maxHeight={700} overflow='hidden' position='relative' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                        position: 'relative',
                        zIndex: '199'
                    }}
                    priority
                />
                <Container maxWidth='xxl' sx={{ position: "absolute", zIndex: '200', display: 'flex', flexDirection: 'column', gap: '.5em' }}>
                    <Typography variant="h1" color='primary.contrastText' fontWeight={800}>Trailers</Typography>
                    <Typography variant="body1" color='primary.contrastText'>La mejor plataforma para guardar tus videos favoritos.</Typography>
                </Container>
            </Grid>
        </Grid>
    )
}