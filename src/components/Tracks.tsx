import { Track } from "./Track";
import { TracksProps } from "../types/Exported.types";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
 

export const Tracks = ({trackList, loading}: TracksProps) => {
   
    return (
        <div className="tracks">
            {
            loading ? 
            <div className="load">
                <CircularProgress />
            </div> :
            <>
                {trackList.length ? <Typography className="text-style" variant="h4" gutterBottom component="div">
                    Search Results:
                </Typography> : null}

                {trackList.length ?
                <Grid container spacing={2}>
                    {trackList.map((item)=>{
                        return (
                            <Grid key={item.track.track_id} item xs={6}>
                                <Track trackDetails={item.track}/>
                            </Grid>
                        )
                    }) }
                </Grid> :
                <Typography className="error" variant="h6" gutterBottom component="div">
                    No songs
                </Typography>}
            </>
            }
        </div>
    )
}