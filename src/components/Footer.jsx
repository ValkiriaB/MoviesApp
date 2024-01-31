import { Box, Typography } from "@mui/material"

export default function Footer() {
	return (
		<Box style={{ backgroundColor: "#1e1e1e",  height:"70px"}}>
           
			<Typography variant="h6" sx={{   letterSpacing: ".3rem",fontFamily: "monospace",color: "whiteSmoke",textAlign: "center", paddingTop: "20px"}}>
			 	Hecho por Vale
			</Typography>
		</Box>

	)
	
}
