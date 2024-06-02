import { Box, Card, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from "react";

interface Props {
  title: string;
  time: string;
}

const LinkPreview = ({ title, time }: Props) => {
  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , marginBottom: '10px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
          <PlayArrowIcon fontSize="large"/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {time}
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default LinkPreview;
