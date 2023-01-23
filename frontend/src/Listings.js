import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Button, IconButton} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import { useDispatch } from "react-redux";
import { addJobs, removeJobs } from "./redux/favoriteJobs";
import { addApply } from "./redux/appliedJobs";
import { useSelector } from "react-redux";

function Listings({ data }) {
  const dispatch = useDispatch();
  const [clickedFavorite, setClickedFavorite] = useState(false);
  const [clickedApply, setClickedApply] = useState(false);

  const { jobs } = useSelector((state) => state.favorite);
  const { applied } = useSelector((state) => state.applied);
  //console.log(jobs); 

  const flag = jobs.findIndex((item) => item.id === data.id);
  const appliedFlag = applied.findIndex((item => item.id === data.id));
  //console.log(flag);

  const minSalary = Math.round(data.salary_min).toString().slice(0,2);
  const maxSalary = Math.round(data.salary_max).toString().slice(0,3);

  function handleIconClick(data) {
    if (clickedFavorite === false) {
      setClickedFavorite(true);
      dispatch(addJobs(data));
    } else {
      setClickedFavorite(false);
      dispatch(removeJobs(data));
    }
    console.log(clickedFavorite);
  }

  function handleApplyClick(data) {
      setClickedApply(true);
      dispatch(addApply(data));
  }

  return (
    <Card sx={{ border: "1px solid grey", maxHeight: 250 }}>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <IconButton onClick={() => handleIconClick(data)}>
        {clickedFavorite === true || flag !== -1 ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
      <IconButton onClick={() => handleApplyClick(data)}>
        {clickedApply === true || appliedFlag !== -1 ? (
          <CheckBoxOutlinedIcon style={{ color: "green" }} />
        ) : (
          <CheckBoxOutlineBlankOutlinedIcon />
        )}
      </IconButton>
      </div>
      <CardContent sx={{paddingTop: 0}}>
        <Typography sx={{ fontSize: 21 }} color="text.primary" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="#4dabf5" gutterBottom>
          {data.company.display_name}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {data.location.display_name}
        </Typography>
        <div
          style={{
            backgroundColor: "#e1f5fe",
            width: "fit-content",
            paddingLeft: 5,
            paddingRight: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              verticalAlign: "middle",
              display: "inline-flex",
              
            }}
            color="text.primary"
            gutterBottom
          >
            <PriceChangeOutlinedIcon /> {minSalary}k/yr - {maxSalary}k/yr
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          posted on {data.created}
          <Button
            variant="contained"
            href={data.redirect_url}
            color="primary"
            size="small"
            endIcon={<DoubleArrowIcon />}
          >
            See More
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Listings;
