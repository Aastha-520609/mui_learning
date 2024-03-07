import React from 'react'
import { Box, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"}}} >
      <Box position="fixed">
        <Typography varient="h6" fontWeight={300}>Online Friends</Typography>
      </Box>
    </Box>
  )
}

export default Rightbar
