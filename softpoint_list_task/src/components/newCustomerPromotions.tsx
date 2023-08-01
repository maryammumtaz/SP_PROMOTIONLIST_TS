import React, { useEffect, useState } from "react"
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Draggable } from "react-drag-reorder"

function NewCustomerPromotions() {
    const [promotions, setPromotions] = useState<Array<any>>(JSON.parse(localStorage.getItem('sp_promotions')??'[]'))
    const [apiCall, setApiCall] = useState<boolean>(promotions.length==0?true:false)
     useEffect(() => {
        if (apiCall) {
            setApiCall(false)
            axios
                .get(
                    "https://run.mocky.io/v3/484016a8-3cdb-44ad-97db-3e5d20d84298"
                )
                .then((response:any) => {
                    localStorage.setItem('sp_promotions', JSON.stringify(response.data))
                    setPromotions(response.data)
                })
        }
    }, [])


    const getChangedPos = (currentPos:number, newPos:number) => {
        var element = promotions[currentPos];
        promotions.splice(currentPos, 1);
        promotions.splice(newPos, 0, element);
        setPromotions(promotions)
        localStorage.setItem('sp_promotions', JSON.stringify(promotions))
    };


    return (
        <>
            {promotions !=null  && promotions.length > 0 ? (
                promotions.map((s, index) => (
                    s.onlyNewCustomers ? (
                        <Card className="promotionsTask" sx={{ maxWidth: 350, marginBottom: "50px" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={s.heroImageUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <center>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {s.name}
                                    </Typography>
                                </center>
                                <Typography variant="body2" color="text.secondary">
                                    {s.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid style={{ marginBottom: "20px" }} container columnSpacing={1} justifyContent="center" xs={12}>
                                    <Button variant='outlined' style={{ marginRight: "15px" }} size="small">{s.termsAndConditionsButtonText}</Button>
                                    <Button variant='contained' size="small">{s.joinNowButtonText}</Button>

                                </Grid>
                            </CardActions>
                        </Card>) : null
                ))) : null}
        </>
    )
}

export default NewCustomerPromotions;