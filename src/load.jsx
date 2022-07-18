import React from 'react'
import './load.css'
import { Stack, Skeleton, Grid } from '@mui/material'

export default function Load() {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Stack spacing={1} height='400px' className='load'>
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            animation='wave'
            className='title'
          />
          <Skeleton variant='rectangular' height={60} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Grid container>
            <Grid item xs={2}>
              <Skeleton
                variant='circular'
                width={30}
                height={30}
                animation='wave'
                className='icons'
              />
            </Grid>
            <Grid item xs={2}>
              <Skeleton
                variant='circular'
                width={30}
                height={30}
                animation='wave'
                className='icons'
              />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  )
}
