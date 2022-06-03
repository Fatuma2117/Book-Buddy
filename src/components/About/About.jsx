import { Box,Typography } from "@material-ui/core";

export default function About() {
  return (
    <Box mt={15} pl={3}sx={{ flexDirection: 'column' , flexWrap: 'nowrap' ,fontSize: 30,}}>
      {/* <h1>About page</h1>  */}
      <Typography align='center'>
      <h1>Technologies Used</h1>
      <ul>
        <li> React</li>
        <li> Redux</li>
        <li> Sagas</li>
        <li> Material UI</li>
        <li>Node </li>
      </ul>

      <h1>Challenge</h1>
      <ul>
        <li>Learning and styling with Material UI</li>
       
      </ul>

      <h1>Future Goal</h1>

      <ul>
        <li>Connect to local library system to rent books directly.</li>
        <li>Implement API search bar.</li>
      </ul>

      <h1>Thank You</h1>
      <ul>
        <li>Matt Black</li>
        <li> Dahl Cohort</li>
        <li> Prime Academy</li>
        <li> Friends and Family</li>
      </ul>
      </Typography>
    </Box>
  );
}
