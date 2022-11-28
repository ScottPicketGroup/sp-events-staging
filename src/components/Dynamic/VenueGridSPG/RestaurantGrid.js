import React from "react"
import useWindowSize from "../../Common/Hooks/useWindowDimensions"
import { Grid } from "../../StyledComponents/containers.css"

import PartneredVenuesGrid from "./PartneredVenuesGrid"
import SPGVenuesGrid from "./SPGVenuesGrid"

const RestaurantGrid = ({ data }) => {
  return (
    <Grid cols={3} full>
      {data[0].internal.type === "ContentfulRestaurantSpe" ? (
        <SPGVenuesGrid data={data} />
      ) : (
        <PartneredVenuesGrid data={data} />
      )}
    </Grid>
  )
}

export default RestaurantGrid
