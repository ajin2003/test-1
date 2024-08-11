import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {data.map((val, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ maxWidth: 345, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <img
                      src={val.img_url}
                      alt="employee"
                      style={{ width: "100%", borderRadius: "50%" }}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {val.EmpName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.empId}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mb: 2 }}>
                  <Button size="small" variant="contained" color="secondary" sx={{ mx: 1 }}>
                    Delete
                  </Button>
                  <Button size="small" variant="contained" color="secondary" sx={{ mx: 1 }}>
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;