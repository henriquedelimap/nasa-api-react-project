import { Container, Stack, IconButton, AppBar, Toolbar, Button } from "@mui/material"
import { ReactNode } from "react"
import { MdArrowDropDown } from "react-icons/md"
import { Outlet } from "react-router-dom"
import { useFetch } from "../../Comon/Hook/useFetch"

export const DefaultPage = () => {
    const { response, handleData } = useFetch()

    return (
        <Container maxWidth='lg' sx={{ justifyContent: 'center', display: 'flex' }} >
            <Stack alignItems='center' spacing={3}>

                <Outlet />

                <IconButton onClick={() => handleData()}>
                    <MdArrowDropDown style={{ fontSize: 40, color: 'white' }} />
                </IconButton>
            </Stack>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 12 }}>
                <Toolbar>
                    <Button>nasa</Button>
                    <Button>edit</Button>
                    <Button>search</Button>
                </Toolbar>
            </AppBar>
        </Container >
    )
}