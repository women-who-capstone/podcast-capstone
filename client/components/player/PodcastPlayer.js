import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import AudioPlayer from './AudioPlayer'

const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    maxWidth: "auto",
    height: "80%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "auto",
    height: 300
  },
  actions: {
    display: "block"
  }
});

class PodcastPlayer extends Component {
  componentDidMount() {
  }

  render() {
    // const { value } = this.state
    const { classes } = this.props;
    const episode = this.props.episode;
    console.log('EPISODE', episode);

    return (
      <div>
      <Card className={`${classes.card} `}>
        <CardMedia
          className={classes.cover}
          image={episode.image ? episode.image : episode.podcast.image}
          title={episode.title}

        />
        <CardContent className={classes.content}>
          <Typography variant="headline">{episode.title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {episode.title}
          </Typography>
        </CardContent>
        {/* <CardMedia
          className={classes.cover}
          image={episode.image}
          title={episode.title}
        /> */}
        <CardActions className={classes.actions}>
          <AudioPlayer audio={episode.audio} />
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PodcastPlayer);
