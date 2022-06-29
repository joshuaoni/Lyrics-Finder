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
                <Typography className="typo" variant="h4" gutterBottom component="div">
                    Tracks
                </Typography>
                {trackList ?
                
                <Grid container spacing={2}>
                    {trackList.map((item)=>{
                        console.log(item)
                        return (
                            <Grid className="track-grid" key={item.track.track_id} item xs={6}>
                                <Track trackDetails={item.track}/>
                            </Grid>
                        )
                    }) }
                </Grid> :
                <Typography className="error" variant="subtitle1" gutterBottom component="div">
                    No tracks yet
                </Typography>}
            </>
            }
        </div>
    )
}