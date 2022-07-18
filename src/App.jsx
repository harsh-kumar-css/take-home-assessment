import * as React from 'react'
import { useReducer, useRef, useCallback } from 'react'
import usePostSearch from './usePostSearch'
import Post from './Post'
import Load from './load'
import Header from './Header'
import { Container } from '@mui/system'
import { Alert, Snackbar, Grid, Box } from '@mui/material'
import './load.css'
import { ACTIONS } from './usePostSearch'

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETNUM:
      return {
        ...state,
        num: action.payload.num,
      }
    case ACTIONS.SETPAGE:
      return {
        ...state,
        page: action.payload.page,
      }
    default:
      return state
  }
}

const App = () => {
  const [state, App_dispatch] = useReducer(reducer, { page: 1, num: 5 })

  const { posts, hasMore, loading, error, dispatch } = usePostSearch(
    state.num,
    state.page,
  )

  const observer = useRef()

  const lastPost = useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(enteries => {
        if (enteries[0].isIntersecting && hasMore) {
          App_dispatch({
            type: ACTIONS.SETPAGE,
            payload: { page: state.page + 1 },
          })
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  function handleNumberofPost(e) {
    App_dispatch({ type: ACTIONS.SETNUM, payload: { num: e.target.value } })
    // setPage(1)
    App_dispatch({ type: ACTIONS.SETPAGE, payload: { page: 1 } })
    dispatch({ type: ACTIONS.SET_POSTS_EMPTY })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Header
        num={state.num}
        page={state.page}
        handleNumberofPost={handleNumberofPost}
      />
      <Container>
        <Grid
          container
          style={{ marginTop: '4em' }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {posts.map((post, index) => {
            return (
              <Grid item xs={12} sm={4}>
                <Post
                  len={posts.length}
                  index={index}
                  lastPost={lastPost}
                  key={post}
                  post={post}
                />
              </Grid>
            )
          })}
          {loading && (
            <>
              <Snackbar open={open} autoHideDuration={6000}>
                <Alert
                  variant='filled'
                  severity='info'
                  sx={{ width: '100%' }}
                  style={{ backgroundColor: 'purple' }}
                >
                  Loading ...
                </Alert>
              </Snackbar>
              <Load />
              <Load />
              <Load />
              <Load />
              <Load />
            </>
          )}
        </Grid>
        {error && (
          <Snackbar open={open} autoHideDuration={6000}>
            <Alert variant='filled' severity='error' sx={{ width: '100%' }}>
              Please Refresh ...
            </Alert>
          </Snackbar>
        )}
      </Container>
    </Box>
  )
}

export default App
