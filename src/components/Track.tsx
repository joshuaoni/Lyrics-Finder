import { Link } from "react-router-dom";
import { TrackProps } from "../types/Exported.types";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ForwardIcon from '@mui/icons-material/ArrowForward';


export const Track = ({trackDetails}: TrackProps) => {
    return (
        <div className="track-grid">
            <div className="card">
                <div>
                    <div>
                        <Typography className="artiste" style={{overflowWrap: 'break-word'}} variant="h6" gutterBottom component="div">
                            {trackDetails.artist_name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <span>Track: </span>{trackDetails.track_name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <span>Album: </span>{trackDetails.album_name}
                        </Typography>
                    </div>
                </div>
            </div>
                <Link to={`lyrics/track/${trackDetails.track_id}`}>
                    <Button size="medium" variant="contained" endIcon={<ForwardIcon />}>Get track lyrics</Button>
                </Link>
        </div>
    )
}
