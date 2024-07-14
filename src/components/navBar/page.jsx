"use client"
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Box, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; import { ButtonPpal } from '../inputs&Buttons/page';
import NewVideo from '../newVideo/page.';

export default function Navbar() {
    const [newVideo, setNewVideo] = useState(false);

    const handleNewVideo = () => {
        setNewVideo(prevData => !prevData);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Typography variant="h5" component="div" color='white' sx={{ flexGrow: 1 }}>
                        SPACEFLIX
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: "100%", maxWidth: 400, gap: '1em' }}>
                        <ButtonPpal
                            styleButton='text'
                            textButton='Nuevo video'
                            color='white'
                            onClickButton={handleNewVideo}
                            full={false}
                        />
                        {/* Modal */}
                        {newVideo ?
                            <NewVideo
                                open={newVideo}
                                handleClose={handleNewVideo}
                            /> : null}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
