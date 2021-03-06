// Core Imports
import React from "react"
import {
  Typography,
  Link,
  makeStyles,
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  root2: {
    maxWidth: 345,
    margin: "16px",
    maxLength: 500,
  },
  media: {
    height: 200,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))
export default function SleepTips({ ...props }) {
  const classes = useStyles()
  return (
    <Box p={4} my={4} width="100%">
      <Grid container direction="row" alignItems="stretch">
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Color or Doodle
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Coloring or drawing can help calm the mind. If facing a blank page is stressful, you can get a coloring
                book or search ‘coloring book’ in your app store or play store. Turning an empty page into a piece of
                art or completing a page in a coloring book allows you to be creative and give your mind a break.
              </Typography>
              <Link href="https://www.healthline.com/health/mindfulness-tricks-to-reduce-anxiety#1">
                More information
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1468575191913-bfa060f643d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Meditate to let go of stress
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                According to the United Kingdom National Health Service, potential triggers for psychotic episodes are
                stressful life events. Although this does not cause schizophrenia, they can lead to its development.
                Watch this one-minute meditation video to practice letting go of stress.
              </Typography>
              <Link href="https://www.youtube.com/watch?v=c1Ndym-IsQg">Video</Link>
              <br />

              <Link href="https://www.nhs.uk/conditions/schizophrenia/causes/">More information</Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Wish others happiness
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Chade-Meng Tan developed this practice of wishing others happiness. The beauty of this practice is it
                only takes 10 seconds and is done completely in your head. You can do it anywhere. If you’re at the
                grocery store, the gym, or your workplace, randomly wish for someone to be happy today. Challenge
                yourself further by wishing someone that you are annoyed with happiness. For example, if someone who
                cuts you off in line at the market, wish them well in your mind.
              </Typography>
              <Link href="https://www.healthline.com/health/mindfulness-tricks-to-reduce-anxiety#3">
                More information
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1562095841-87a7034cdf74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Focus on one thing at a time
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Although multitasking is often thought of as a skill, it can also cause you to feel overwhelmed.
                Consider focusing on one task at time to minimize stress. Choose a task and give it your undivided
                attention. Set a timer on your phone and avoid checking it until the timer goes off.
              </Typography>
              <Link href="https://www.healthline.com/health/mindfulness-tricks-to-reduce-anxiety#5">
                More information
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Focus on your breathing
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Low level of social interaction was found to have an impact on lifespan equivalent to smoking nearly a
                pack of cigarettes a day or being an alcoholic, and was twice as harmful as being obese.
              </Typography>
              <Link href="https://ggia.berkeley.edu/practice/mindful_breathing">More information</Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Log out of all your social media
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Social media can be a fun way to connect with others, but too much time spent on it can cause anxiety
                and reduce productivity. It is known to cause feelings of inadequacy and loneliness. Log out of your
                accounts for a period of time to give your mind a break. Logging out will slow down your access to
                social media or stop you from seeing it altogether. Reflect on how you feel during your time away from
                these accounts.
              </Typography>
              <Link href="https://www.healthline.com/health/mindfulness-tricks-to-reduce-anxiety#5">
                More information
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Journaling can be healing
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Whether it’s writing what you are grateful for or what you did today, the act of writing in a journal
                can be very therapeutic. There is no right or wrong topic to write about, making journaling care-free.
                Sharing your thoughts can help ease your mind. Get out a piece of paper or open up the notes section in
                your phone and write about anything for five minutes. Let your mind wander as you write, and then think
                about what you wrote. If you prefer having something to write about consider getting a guided journal,
                or search ‘Journal’ in your phone’s app store.
              </Typography>
              <Link href="https://www.healthline.com/health/mindfulness-tricks-to-reduce-anxiety#5">
                More information
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Reduce your screen time
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Whether it’s playing games or scrolling through social media, time flies while using our smartphones.
                Stepping away from your phone can reduce the pressures that come with it. Minimize the amount of time
                you spend by putting your phone on ‘do not disturb’ or ‘silent’. If you still want to receive
                notifications from some features on your phone, another method is to turn off notifications from
                specific apps. This can be done through the app itself or through the settings apps on your phone.
              </Typography>
              <Link href="https://www.cnet.com/how-to/screen-time-is-rising-and-its-ruining-us-here-are-11-ways-to-cut-back/">
                More information
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  )
}
