import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Tooltip,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Header = ({ num, page, handleNumberofPost }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ backgroundColor: 'rgb(102, 0, 102)' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Vite App
          </Typography>
          <Search>
            <Tooltip title='Current Page Number' arrow>
              <StyledInputBase
                value={page}
                placeholder='Page Number'
                inputProps={{ 'aria-label': 'search' }}
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
              />
            </Tooltip>
          </Search>
          <Search>
            <Tooltip title='Number of posts on each page' arrow>
              <StyledInputBase
                value={num}
                onChange={handleNumberofPost}
                placeholder='Enter Number of Posts you want on each page'
                inputProps={{ 'aria-label': 'search' }}
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
              />
            </Tooltip>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
