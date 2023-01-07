import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(3),
  },
  btn:{
    color: "blue"
  }
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.post}>
      <CardActionArea>
        <CardMedia component="img" height="200" image="img.jpg" alt="post" />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          My Post
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta a
          ullam neque illo quasi iure minima distinctio quibusdam deleniti
          officia aspernatur ex, fugit dolorum quidem adipisci! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Soluta a ullam neque
          illo quasi iure minima distinctio quibusdam deleniti officia
          aspernatur ex, fugit dolorum quidem adipisci! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Soluta a ullam neque illo quasi
          iure minima distinctio quibusdam deleniti officia aspernatur ex, fugit
          dolorum quidem adipisci! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Soluta a ullam neque illo quasi iure minima
          distinctio quibusdam deleniti officia aspernatur ex, fugit dolorum
          quidem adipisci! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Soluta a ullam neque illo quasi iure minima distinctio quibusdam
          deleniti officia aspernatur ex, fugit dolorum quidem adipisci!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.btn}>Share</Button>
        <Button size="small" className={classes.btn}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Post;
