import * as React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import productCurvyLines from "../assets/productCurvyLines.png";
import productValues1 from "../assets/productValues1.svg";
import productValues2 from "../assets/productValues2.svg";
import productValues3 from "../assets/productValues3.svg";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      style={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "secondary.light",
      }}
    >
      <Container
        style={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
      >
        <img
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          style={{ pointerEvents: "none", position: "absolute" }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={productValues1}
                alt="suitcase"
                style={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                The best luxury hotels
              </Typography>
              <Typography variant="h5">
                {
                  "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                }

                {
                  ", go for a mini-vacation just a few subway stops away from your home."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={productValues2}
                alt="graph"
                style={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }

                {"your Sundays will not be alike."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={productValues3}
                alt="clock"
                style={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
