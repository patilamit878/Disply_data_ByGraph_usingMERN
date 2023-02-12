import { Box, Button, Fab, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () => {
    const navigate = useNavigate();

  const [data, setData] = useState({
    year: "",
    profit: "",
  });

  const AddData = async () => {
    const { year, profit } = data;
    if (year && profit) {
      axios
        .post("http://localhost:4000/add-Data", data)
        .then((res) => console.log(res));
        navigate('/')
    } else {
      alert("Invalid input");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Box
      width={500}
      height={300}
      boxShadow={2}
      p={2}
      color="blue"
      margin="100px 300px "
      textAlign="center"
    >
      <div>
        <Typography variant="h4" marginBottom={1}>
          Add Data
        </Typography>
        <TextField
          fullWidth
          id="outlined-required"
          label="Year"
          name="year"
          value={data.year}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          fullWidth
          id="outlined-required"
          label="Profit"
          name="profit"
          value={data.profit}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button onClick={AddData} variant="contained" fullWidth>
          Add
        </Button>
      </div>
    </Box>
  );
};

export default AddData;
