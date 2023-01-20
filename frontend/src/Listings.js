import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";

import {useDispatch} from 'react-redux';
import {addJobs, removeJobs} from './redux/favoriteJobs';
import { useSelector } from "react-redux";

function Listings({ data }) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const {jobs} = useSelector((state) => state.favorite);
  console.log(jobs);

  const flag = jobs.findIndex((item) => item.id === data.id);
  console.log(flag);

  function handleIconClick(data) {
    if (clicked === false) {
      setClicked(true);
      dispatch(addJobs(data));
    } else {
      setClicked(false);
      dispatch(removeJobs(data));
    }
  }

  return (
    <Card sx={{ border: "1px solid grey" }}>
      <Button onClick={() => handleIconClick(data)}>
        {clicked === true || flag !== -1 ? <FavoriteIcon style={{color: 'red'}}/> : <FavoriteBorderIcon /> }
        </Button>
      <CardContent>
        <Typography sx={{ fontSize: 21 }} color="text.primary" gutterBottom>
          {data.title} ${data.salary_max}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {data.location.display_name}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>{data.description}</Typography>
        <Link href={data.redirect_url} target='_blank'>
          <Typography sx={{ fontSize: 16 }}>View Job</Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default Listings;
