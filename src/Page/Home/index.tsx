import { Grid, Stack, Typography } from "@mui/material"
import { useFetch } from "../../Comon/Hook/useFetch"
import { Card } from "../../Component/Card"
import { CardType } from "../../Type/FetchType"
import './style.css'


export const Home = () => {
    const { response, handleData, viewContador } = useFetch()
    const name = 'nasa'

    const useIndex = (index: number) => {

        return index === 0 ? 11.7 : index % 2 == 0 ? 6 : 6

    }
    return (
        <>
            <Stack sx={{ height: '70vh' }} direction='row'>
                {

                }
            </Stack>

            <Grid container gap={2} sx={{ justifyContent: 'center', animation: 'all 20s ease' }} >

                {

                    response?.slice(0, viewContador).map((item: CardType, index) => (
                        <Grid xs={12} md={5} lg={12} sx={{ animation: 'all 20s ease' }}>
                            <Card
                                hdurl={item.hdurl}
                                url={item.url}
                                title={item.title}
                                media_type={item.media_type}
                                copyright={item.copyright}
                                explanation={item.explanation}
                                date={item.date}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>

    )
}