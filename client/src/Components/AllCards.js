import React, { useState, useEffect } from "react"
import CardDetails from "./CardDetails"
import Grid from "@mui/material/Grid"
import { flexbox } from "@mui/system"
// import Paper from '@mui/material/Paper'
// import Grid from '@mui/material/Grid'

function AllCards() {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('/credit_cards')
            .then((r) => r.json())
            .then((x) => setData(x))
    }, [])
    // console.log(data)


    const cardList = data.length ? data.map((card) =>
        // <Grid item>
            <CardDetails card={card} />
        // </Grid>
    ) : null

    // console.log(data.length)

    return (
        <div>
            {/* <Paper> */}
                {/* test */}
            {/* </Paper> */}
            {/* {data.length ?  */}
            {/* <Grid > */}
                <div style={{display:'flex', overflowY:'hidden', overflowX:'auto'}}>
                {cardList}
                </div>
                
            {/* </Grid> */}
            {/* // : null} */}
        </div>
    )
}
export default AllCards