import * as React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material'
interface Props {
  len: Number
  index: Number
  lastPost: any
  post: any
}

const Post = ({ len, index, lastPost, post }: Props) => {
  if (len === index) {
    return (
      <Card ref={lastPost} sx={{ Width: 345, height: 400 }}>
        <CardHeader
          avatar={<Avatar alt='Remy Sharp' src={post.avatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.user}
          subheader={moment(post.createdAt).utc().format('DD/MM/YYYY')}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {post.post}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  } else {
    return (
      <Card ref={lastPost} sx={{ Width: 345, height: 400 }}>
        <CardHeader
          avatar={<Avatar alt='Remy Sharp' src={post.avatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.user}
          subheader={moment(post.createdAt).utc().format('DD/MM/YYYY')}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {post.post}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default Post
