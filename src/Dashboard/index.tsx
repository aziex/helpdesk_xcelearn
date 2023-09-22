import { Box, Grid, IconButton, List, ListItem, Paper, Typography} from "@mui/material";
import Search from "./Component/search";
import HouseIcon from '@mui/icons-material/House';
import { styled } from '@mui/material/styles';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    alignItems: 'center',
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));


export default function Dashboard() {
        return (
            <Box>
            <Box m={5}>
                <Search />
            </Box>
            <Box sx={{ width: '100%', flexDirection: 'row-reverse'}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
            <Box justifyContent='center'>
              <HouseIcon sx={{flexDirection: 'row-reverse'}}/>
              <Typography fontWeight='bold'>
                Swingvy introduction
              </Typography>

              <Typography marginBottom={2}>
              What is Swingvy and how can it ease your HR daily tasks
              </Typography>

              <Typography>
                Welcome to Swingvy!
              </Typography>

              <Typography>
                Plans available
              </Typography>

            </Box>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>

          <Box justifyContent='center'>
              <CollectionsBookmarkIcon sx={{flexDirection: 'row-reverse'}}/>
              <Typography fontWeight='bold'>
                Swingvy introduction
              </Typography>

              <Typography marginBottom={2}>
              New to Swingvy? Just started a trial? Start here to learn the basic              
              </Typography>

              <Typography>
              Step 1 - Fill up and set up company profile
              </Typography>
              <Typography>
              Step 2 - Setting up company organisation structure
              </Typography>
              <Typography>
                Step 3 - Setting up account permission
                </Typography>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>6</Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
    )
}
