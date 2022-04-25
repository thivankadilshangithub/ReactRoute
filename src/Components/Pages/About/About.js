import React from "react";
import './About.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import flower from './lepa.jpg';
import flower1 from './lepa2.jpg';
import flower2 from './lepa3.jpg';

function About() {
    return (
        <div className="container">
            <h1>Welcome to About Page</h1>
            <div class="row">
                <div class="col-4 p-3">
                    <Card sx={{ maxWidth: 345 }} className="card1" >
                        <CardContent>
                            <img src={flower} height={200} width={300} alt="lepa" />
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>

                <div class="col-4 p-3">
                    <Card sx={{ maxWidth: 345 }} className="card1" >
                        <CardContent>
                            <img src={flower1} height={200} width={300} alt="lepa" />
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div class="col-4 p-3">
                    <Card sx={{ maxWidth: 345 }} className="card1" >
                        <CardContent>
                            <img src={flower2} height={200} width={300} alt="lepa" />
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;