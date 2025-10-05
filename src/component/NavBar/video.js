import react, { useState } from 'react';
import { Typography, Box, Grid, useMediaQuery, Card, iframe, CardContent, Paper, InputBase, CardMedia, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
import { Typewriter } from 'react-simple-typewriter';
import Divider from '@mui/material/Divider';
import { motion, transform } from "framer-motion";

const tutorials = [
    {
        id: 1,
        title: 'HTML Tutorials 🔴',
        description: 'A full version on HTML structure and fundamentals.',
        url: 'https://youtube.com/playlist?list=PLeyh81_9izsq3bmkWHayEwHsxlOOAsXlH&si=lyl0QtrZOqPjHRFn',
        thumbnail: "/images/thumbnail part 3.PNG",
    },
    {
        id: 2,
        title: 'CSS Tutorials 🔵',
        description: 'A Full CSS guide for styling your web application and responsiveness',
        url: 'https://youtube.com/playlist?list=PLeyh81_9izsqSqLHs0pYNkR3U-57rVV3O&si=-GeoINvlKsW5L8Yt',
        thumbnail: '/images/CSS thumbnail - Part 1.PNG',
    },
    {
        id: 3,
        title: 'Javascript Tutorials 🟡',
        description: 'A full Javascript Tutorial, covering on functions and interactive apps & mini projects.',
        url: 'https://youtube.com/playlist?list=PLeyh81_9izsqoQRD7XiBsvgZFTXQ9b6Lv&si=V9CjCjMTxZk497Nh',
        thumbnail: '/images/Thumbnail - part 1 JS.PNG',
    },

]


export default function Video() {

    const [searchInfo, setSearchInfo] = useState("");
    const [selectedPlaylist, setSelectedPlaylist] = useState("");

    const filteredTutorials = tutorials.filter(tutorial =>
    tutorial.title.toLowerCase().includes(searchInfo.toLowerCase()));



    return (
        <Box
            flexDirection={{ xs: "column" }}
            sx={{
                minHeight: '150vh',
                background: 'linear-gradient(to bottom, #000000, #1a2a6c)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',

            }}>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: 'monospace', mt: 12, textAlign: 'center' }}>

                    <Typewriter
                        words={['Video Content 📹']}
                        typeSpeed={30}
                        delaySpeed={1000}
                        margin={2}
                    />
                </Typography>
                {/* Video Content down here */}


                {/* Search Bar */}
                <Box display="flex" justifyContent="center" mt={5}>
                    <Paper
                        component="form"
                        sx={{ p: "2px 6px", display: "flex", alignItems: "center", width: 400, borderRadius: 5 }}
                    >
                        <SearchIcon />
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search tutorials e.g HTML or CSS" onChange={(e) => setSearchInfo(e.target.value)} />
                    </Paper>
                </Box>

                <Divider sx={{
                    mb: 5,
                    height: 2, // Makes the line thicker
                    bgcolor: '#ffff', // Sets a custom background color
                    border: 'none', // Removes default border properties
                    outlineStyle: 'initial',
                    display: 'flex',
                    justifyContent: 'middle',
                    margin: 5
                }}
                />
                <Typography variant='h6' gutterBottom sx={{ fontFamily: 'monospace', fontWeight: 'bold', textAlign: 'center', margin: 6, color: '#ffff' }}>
                    A collection of my Youtube playlist containing front-end content I teach to beginners in web development 
                </Typography>

                {/* Tutorial Grid number one */}
                <Grid container selected={4} justifyContent={'center'} display={'flex'} gap={4} marginBottom={8}>
                    {filteredTutorials.map((tutorial) => (
                        <Grid item key={tutorial.id} xs={12} sm={8} md={6}>
                            <Card variant = 'contained' href = {tutorial.url} sx={{ 
                                borderRadius: 4,
                                boxShadow: "rgba(25, 68, 94, 0.45)",  
                                bgcolor: "rgba(255,255,255,0.05)", 
                                color: '#ffff',
                                height: "350px",
                                cursor: 'pointer',
                                width: "375px",
                                transition: "0.3s",
                                "&:hover": { transform: "scale(1.05)", bgcolor: "rgba(255, 255, 255, 0.16)" },

                                 
                                 }}>
                                <CardMedia
                                    component={'img'}
                                    height={160}
                                    image={tutorial.thumbnail}
                                    mt={20}
                                    alt={tutorial.title}
                                />
                                <CardContent> 
                                    <Typography variant='h6' sx={{ fontFamily: 'monospace', fontWeight: 'bold', textAlign: 'center'}}> {tutorial.title} </Typography>
                                    <Typography variant='paragraph'> {tutorial.description} </Typography>

                                </CardContent>
                                <Button sx={{
                                    marginLeft: 14,
                                    borderRadius: 5,
                                }}
                                variant='contained'
                                size='small'
                                color='secondary'
                                href = {tutorial.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                > 
                                <YouTubeIcon/>

                                Watch Now 🚀
                                </Button>
                            </Card>
                        </Grid>
                    ))}

                </Grid>


            </motion.div>
        </Box>
    )

}



