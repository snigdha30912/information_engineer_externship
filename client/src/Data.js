import React from "react";
import "./style.css";
import OutlinedCard from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from 'axios';


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function Data() {

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // use effect to fetch the api data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/get/');
      setData(response.data.data);
      setLoading(false);
    }
    fetchData();

  }, []);


  return (
    <>
      {!!data ? (
        <>
          {/* display the objects as cards in a arranged in a grid */}
          <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
            style={{ margin: '30px' }}
          >
            {data.sort((a,b) => a.id - b.id).map(card => (
              <Grid item xs={12} sm={6} md={4}>
                <OutlinedCard card={card} loading={loading} />
              </Grid>
            ))}


          </Grid>
        </>) : (<div></div>)}

    </>


  );
}
