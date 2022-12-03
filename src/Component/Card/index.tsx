import { Box, Paper, Slide, Stack, Typography } from "@mui/material"
import { CardType } from "../../Type/FetchType"
import './style.css'

export const Card = (card: CardType) => {
    const { hdurl, media_type, title, copyright, explanation, date, url } = card

    function truncateString(str: string, num: number) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <Slide in={!!card} direction='up'>
            <Paper sx={{
                width: '100%',
                height: '440px',
                overflow: 'hidden',
                '& img': { width: '100%', overflow: 'hidden' }
            }}>
                <Stack direction='row' sx={{ height: '100%' }}>

                    <Box sx={{ overflow: 'hidden', height: '100%', width: { xs: '100%', md: '100%', lg: '480px' }, }}>
                        {
                            media_type == 'video'
                                ? (<iframe
                                    src={url}
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }} />)
                                : (<img
                                    className="image"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    src={url}
                                />)
                        }
                    </Box>

                    <Stack justifyContent='space-evenly' sx={{ width: 'calc(100% - 480px)', display: { xs: 'none', md: 'none', lg: 'flex' }, px: 2, m: 2 }}>
                        <Typography noWrap variant='h2' sx={{ fontWeight: 800, color: '#9f9f9f', lineHeight: '5rem' }}>
                            {!!copyright ? truncateString(copyright, 18) : 'nasa'}
                        </Typography>

                        <Typography sx={{ color: '#9f9f9f' }}>
                            {date}
                        </Typography>

                        <Typography sx={{ color: '#9f9f9f' }}>
                            {truncateString(title, 40)}
                        </Typography>

                        <Typography sx={{ wordWrap: 'break-word', textAlign: 'justify' }}>
                            {truncateString(explanation, 700)}
                        </Typography>

                    </Stack>


                </Stack>

            </Paper>
        </Slide>

    )
}