import { useState } from "react"
import { SearchProps } from "../types/Exported.types"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({settingTrackList, settingLoading}: SearchProps) => {
    const [title, setTitle] = useState('')

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (title === '') return;
        settingLoading(true);
        
        const response = await fetch(`https://safe-reaches-52312.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=1ad8558fb899b0890b2418751281e416`)
        const res = await response.json()
        let track_list = res.message.body.track_list;
        console.log({track_list:res})
   
        settingTrackList(track_list);
        setTitle('');
        settingLoading(false)
    }


    return (
        <div className="search">
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
                <Button onClick={handleSubmit} size="large" variant="contained" endIcon={<SearchIcon />}>Get track lyrics</Button>
            </form>
        </div>
    )
}