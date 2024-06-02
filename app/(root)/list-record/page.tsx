import LinkPreview from "@/app/components/LinkPreview";
import { Box } from "@mui/material";
import React from "react";

const ListPage = () => {
  return (
    <>
      <Box sx={{ m: 2}}>
        <LinkPreview title="Record 1" time="1:30" />
        <LinkPreview title="Record 2" time="2:30" />
        <LinkPreview title="Record 3" time="2:30" />
        <LinkPreview title="Record 4" time="4:30" />
      </Box>
    </>
  );
};

export default ListPage;
