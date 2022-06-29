import { useState } from "react";
import { SearchProps } from "../types/Exported.types"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

export const Search = ({settingTrackList, settingLoading}: SearchProps) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (title === '') return;
        settingLoading(true);
        
        const response = await fetch(`https://safe-reaches-52312.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=58b1745e8f247488225e2737052da3a4`);
        const res = await response.json();
        let track_list = res.message.body.track_list;
   
        settingTrackList(track_list);
        setTitle('');
        settingLoading(false);
    }


    return (
        <div className="search">
            <Typography variant="h5" gutterBottom component="div">
                Search for songs
            </Typography>
            <form onSubmit={(e)=>{
                handleSubmit(e);
            }}>
                <TextField
                    className="txt"
                    id="outlined-required"
                    label="Song title"
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                />
                <Button onClick={handleSubmit} size="large" variant="contained" endIcon={<SearchIcon />}>Get track</Button>
            </form>
        </div>
    )
}