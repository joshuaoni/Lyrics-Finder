import Typography from '@mui/material/Typography';
import MusicIcon from '@mui/icons-material/QueueMusic';

export const Navigation = () => {
    return (
        <nav>
            <Typography className="text-style" variant="h4" gutterBottom component="div">
                <MusicIcon className='music' fontSize="large"/>Lyrics Finder
            </Typography>
        </nav>
    )
}