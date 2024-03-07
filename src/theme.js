import {createTheme} from "@mui/material"
import { lightBlue } from "@mui/material/colors"

export const theme = createTheme({
  palette:{
    primary:{
        main: "#5D21D1",
        light: "lightBlue"
    },
    secondary:{
        main: "#F9CA3A",
    },
    otherColor: {
        main: "#999"
    }
  }
})