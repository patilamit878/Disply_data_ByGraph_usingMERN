import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [money, setMoney] = useState([]);

  const getData = async () => {
    let result = await fetch("http://localhost:4000/allData");
    result = await result.json();
    setMoney(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Grid container spacing={4} marginTop={5} marginLeft={1}>
        {money.map((item, key) => (
          <Grid item xs={3} key={item._id}>
            <Card sx={{ maxWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.year}
                </Typography>
                <Typography
                  className="productDesc"
                  variant="body2"
                  color="text.secondary"
                >
                  To see data through graph
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">
                  <Link className="details" to={`/displayData/${item._id}`}>
                     Show
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
