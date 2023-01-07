import React from "react";
import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AvatarGroup from "@mui/material/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    right: 0,
    top: 0,
  },
  friends: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  gallery: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
}));
function RightBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.friends}>
        <Typography variant="h6" fontWeight={100} mt={2}  className={classes.gallery}>Online Friends</Typography>
        <AvatarGroup max={4} className={classes.avatar}>
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="user" src="https://mui.com/static/images/avatar/1.jpg" />
        </AvatarGroup>
      </div>
      <div>
        <Typography variant="h6" fontWeight={100} className={classes.gallery}>Gallery</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </div>
      <div>
      <Typography variant="h6" fontWeight={100} className={classes.gallery}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
      </div>
    </Container>
  );
}

export default RightBar;
