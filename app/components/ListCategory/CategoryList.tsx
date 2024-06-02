"use client";

// src/CategoryList.tsx
import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Category, Item } from "@/app/types";
import ShowDialog from "./ShowDialog";
import { useRouter } from "next/router";
import Link from "next/link";

interface CategoryListProps {
  categories: Category[];
  items: Item[];
}

interface SelectValue {
  title: string;
  items: any[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, items }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectValue, setSelectValue] = useState<SelectValue>({
    title: "",
    items: [],
  });

  const handleSelectValue = (title: string, items: any[]) => {
    setSelectValue({ title, items });
  };

  const handleOpenDialog = (title: string, items: any[]) => {
    setOpenDialog(true);
    setSelectValue({ title, items });
  };
  return (
    <>
      <Grid container spacing={2} sx={{ my: 4 }}>
        {categories.map((category) => (
          <Grid
            item
            key={category.id}
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link href={"list-record"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "2px solid #352A29",
                    borderRadius: "50%",
                    width: "fit-content",
                    padding: 2,
                  }}
                >
                  <AutoStoriesIcon sx={{ color: "#352A29" }} />
                </Box>
                <Typography variant="body1" gutterBottom>
                  {category.name}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CategoryList;
