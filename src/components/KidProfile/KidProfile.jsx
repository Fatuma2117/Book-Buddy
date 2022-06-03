import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//MUI---------------------------------------------------
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";


function KidProfile() {
  const dispatch = useDispatch();
  const points = useSelector((store) => store.points);

  useEffect(() => {
    dispatch({
      type: "FETCH_POINTS",
    });
  }, []);
  const theme = createTheme({
    typography: {
      // fontFamily: ["Train One", "cursive"].join(","),
      fontSize: 26,
    },
  });
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
        <Typography align='center'>
          <Typography   fontSize="" gutterBottom>
            {points.map((point) => {
              console.log("points map----->", point);
              return <>Total Book Points:  {point.sum}</>;
            })}
          </Typography>
        </Typography>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default KidProfile;
