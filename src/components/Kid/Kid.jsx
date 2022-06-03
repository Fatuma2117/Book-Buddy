import { useHistory } from "react-router-dom";
//MUI---------------------------------------------
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function Kid({ kid }) {
  const history = useHistory();

  const handleKidClick = () => {
    if (localStorage.getItem("current_kid_id") === "0") {
      localStorage.setItem("current_kid_id", kid.id);
    } else {
      localStorage.setItem("current_kid_id", kid.id);
      history.push("/BookList");
    }
  };

  // console.log(kid.id)
  return (
    <div onClick={handleKidClick}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {kid.name}
        </Typography>
      </Container>
    </div>
  );
}
export default Kid;
