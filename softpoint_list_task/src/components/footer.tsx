import { BottomNavigation } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


function  Footer (){  

    return(
        <Box sx={{ flexGrow: 1 }}>
        <BottomNavigation sx={{position:"fixed"}} className="App-footer">
            <Typography variant="h6" component="div" style={{textAlign:"center"}} >
              Copyrights &copy; SoftPoint - 2023
            </Typography>          
        </BottomNavigation>
      </Box>
    )
}


export default Footer;