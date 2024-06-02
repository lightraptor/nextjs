import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  listItem: any[]
}

const ShowDialog = ({open, onClose, listItem, title }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box>
        {listItem.map((item) => (
          <Box key={item.id}>
            <Typography variant="body1" gutterBottom>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Dialog>
  )
}

export default ShowDialog
