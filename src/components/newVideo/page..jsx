import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, SelectChangeEvent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonPpal, InputLight, SelectLight } from '../inputs&Buttons/page';
import { ApiContext } from '../../context';
import { advertenceTrueMessage } from '../../context/sweetAlert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '.5em'
};

const options = [
    { value: 'Música', label: 'Música' },
    { value: 'Juegos', label: 'Juegos' },
    { value: 'Educación', label: 'Educación' },
    { value: 'Comedia', label: 'Comedia' },
    { value: 'Deportes', label: 'Deportes' },
    { value: 'Noticias', label: 'Noticias' },
    { value: 'Entretenimiento', label: 'Entretenimiento' },
    { value: 'Trailer', label: 'Ciencia y Tecnología' },
    { value: 'Películas y Animación', label: 'Películas y Animación' },
];


const NewVideo = ({ open, handleClose }) => {
    const { createVideo } = useContext(ApiContext);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [formVideo, setFormVideo] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormVideo({
            ...formVideo,
            [name]: value
        });

        if (name === "category") {
            setSelectedCategory(value);
        }
    };

    const fetchCreateVideo = async (e) => {
        console.log('funciona')
        e.preventDefault();

        const { title, capa, video, category, description } = formVideo

        try {
            const response = await createVideo('/spaceFlix', 'POST', {
                title,
                capa,
                video,
                category,
                description
            });
            if (response.status === 201) {
                advertenceTrueMessage(' Video creado exitosamente')
                handleClose();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ zIndex: '1000' }}
        >
            <Box sx={style}>
                <Box sx={{ position: 'relative', p: 4 }}>
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', right: '.3em', top: '.3em' }}>
                        <CloseIcon />
                    </IconButton>
                    <form onSubmit={fetchCreateVideo}>
                        <Typography variant="h4" fontWeight={700} component="h2" mt={2} mb={4}>
                            Nuevo Video
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <InputLight
                                nameValue='title'
                                name='Titulo'
                                required={true}
                                full={true}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <InputLight
                                nameValue='capa'
                                name='Link Portada'
                                required={true}
                                full={true}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <InputLight
                                nameValue='video'
                                name='Link Video'
                                required={true}
                                full={true}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <SelectLight
                                nameValue='category'
                                name='Categoria'
                                value={selectedCategory}
                                required={true}
                                options={options}
                                onChangeSelect={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <InputLight
                                nameValue='description'
                                name='Descripción'
                                required={true}
                                multiline={true}
                                full={true}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: '.5em' }}>
                            <ButtonPpal
                                color='error'
                                // typeButton='submit'
                                textButton='Cancelar'
                                styleButton='contained'
                            />
                            <ButtonPpal
                                color='primary'
                                typeButton='submit'
                                textButton='Crear Video'
                                styleButton='contained'
                            />
                        </Box>
                    </form>
                </Box>
            </Box>
        </Modal>
    );
};

export default NewVideo;