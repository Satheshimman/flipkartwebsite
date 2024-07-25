import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BsCart2 } from "react-icons/bs";
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uparr, upcart, upinvalue, uplist, upresult, upsearch, upsearchcontent, upvaluearray } from '../Reducer';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillHeart } from "react-icons/ai";


const Search = styled('div')(({ theme }) => ({

}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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
}));

export const Navbar = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [fivalue, setfivalue] = useState([])
  const [sevalue, setsevalue] = useState("")

  const setvalue = (e) => {
    dispatch(upinvalue(e.target.value))
    let a = store.search.filter((val, ind) => (val.proname.toLowerCase().includes(store.invalue)))
    dispatch(upresult(a))
  }

  const searchvalue = () => {
    dispatch(upinvalue(sevalue))
  }

  useEffect(searchvalue, [sevalue])
  const store = useSelector(
    ({ imman }) => imman
  )
  const [arrlen, setarrlen] = useState(0)


  const gocart = () => {
    nav("/cart")
  }
  const gohome = () => {
    nav("/")
  }
  const getsearch = () => {

    nav("/result")

  }

  const go = () => {
    nav("/search")

  }

  const gofav = () => {
    nav("/favourite")
  }

  const goo = () => {
    var aa = []
    var a = [...store.array]
    a.map((v, i) => {
      var b = store.array[i].products
      b.filter((val, ind) => {
        var c = store.array[i].products[ind]



        aa[aa.length] = c


      })
    })
    dispatch(upsearch(aa))
    console.log(store.search)
  }

  const cartlen = () => {
    console.log(store.cart.length)
    setarrlen(store.cart.length)
  }

  useEffect(cartlen, [store.array])



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box sx={{ padding: "10px 30px", cursor: "pointer" }}>

          <ul class="navli">
            <li>My Account</li>
            <li>Became a Seller</li>
            <li onClick={gofav}>My WishList</li>
            <li>More</li>
            <li onClick={gocart}><span><BsCart2 /></span> Cart <span>{store.cart.length}</span></li>
          </ul>
        </Box>
      </List>
      <Divider />

    </Box>
  );

  const krishna = () => {
    var aa = []
    var a = [...store.array]
    a.map((v, i) => {
      var b = store.array[i].products
      b.filter((val, ind) => {
        var c = store.array[i].products[ind]

        if (c.Iscart === true) {

          aa[aa.length] = c

        }
      })
    })
    dispatch(upcart(aa))

  }

  useEffect(krishna, [store.array])

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <AppBar position="static">
        <Toolbar>

          <Container>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ width: { sm: "50%", lg: "10%" }, cursor: "pointer" }} onClick={gohome}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box sx={{ textAlign: "start" }}>
                    <Typography
                      variant="p"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, fontSize: "20px", marginRight: "6px" }}
                    >
                      Flipkartt
                    </Typography>
                    <Typography variant="b" sx={{ fontSize: "12px" }}>
                      Explore
                    </Typography>
                    <Typography variant="b" sx={{ fontSize: "12px", color: "yellow" }}>
                      Plus
                    </Typography>

                  </Box>
                </Box>

                <Box>

                </Box>
              </Box>

              <Box sx={{ width: { lg: "40%" } }}>
                <Box sx={{ position: "relative", display: { xs: "none", md: "block", lg: "block" }, cursor: "pointer" }}>
                  <Search >
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      sx={{ width: "50ch", marginLeft: "5px", backgroundColor: "white", height: "33px", color: "blue", cursor: "pointer" }}
                      onChange={setvalue}
                      onClick={go}


                    />
                  </Search>
                  <Typography component="div" variant='i' sx={{ color: "blue", position: "absolute", top: "25%", right: "10px", cursor: "pointer" }}>
                    <SearchIcon onClick={getsearch} />
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: { lg: "50%" }, display: { xs: "none", lg: "block" }, margin: "0px 5px 0px 10px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600" }}>
                    <Typography component="" variant='p' sx={{}}>
                      My Account
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", cursor: "pointer" }}>
                    <Typography component="" variant='p' sx={{}}>
                      Became a Seller
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", cursor: "pointer" }}>
                    <Typography component="" variant='p' sx={{}}>
                      More
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", cursor: "pointer" }} onClick={gofav}>
                    <Typography component="" variant='p' sx={{}}>
                      Favourites
                    </Typography>

                    <Typography component="" variant='i' sx={{ marginTop: "6px" }}>
                      <AiFillHeart />
                    </Typography>
                  </Box>


                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", position: "relative", cursor: "pointer" }} onClick={gocart}>
                    <Typography component="" variant='i' sx={{ marginTop: "6px", fontSize: "25px" }}>
                      <BsCart2 />
                    </Typography>

                    <Typography component="" variant='p' sx={{}}>
                      Cart
                    </Typography>

                    {store.cart.length >= 1 ? <Typography component="p" variant="p" sx={{ position: "absolute", top: "-8px", right: "-19px", background: "#e70000d4", padding: "2px 7px ", borderRadius: "50%" }}>{store.cart.length}</Typography> : ""}
                  </Box>



                </Box>
              </Box>

              <React.Fragment key={'right'} sx={{ width: { sm: "50%" } }}>
                <Button onClick={toggleDrawer('right', true)}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2, color: "white", display: { xs: "block", lg: "none" } }}
                  >  <MenuIcon />
                  </IconButton>
                </Button>
                <Drawer
                  anchor={'right'}
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
                >
                  {list('right')}
                </Drawer>
              </React.Fragment>
            </Box>
          </Container>





        </Toolbar>
      </AppBar>
    </Box>


  );
}