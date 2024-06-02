"use client";

// src/CategoryList.tsx
import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Category, Item } from "@/app/types";
import ShowDialog from "./ShowDialog";

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
            onClick={() => handleOpenDialog(category.name, items.filter((item) => item.categoryId === category.id))}
          >
            <Box className="item-icon">
              <AutoStoriesIcon />
            </Box>
            <Typography variant="body1" gutterBottom>
              {category.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <ShowDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        listItem={selectValue.items}
        title={selectValue.title}
      />
    </>
  );
};

export default CategoryList;
