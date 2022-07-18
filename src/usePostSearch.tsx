import { useEffect, useReducer } from 'react'

export const ACTIONS = {
  SETPOSTS: 'setPosts',
  SETERROR: 'setError',
  SETLOADING: 'setLoading',
  SETHASMORE: 'setHasMore',
  SET_POSTS_EMPTY: 'setPostEmpty',
  SETPAGE: 'setPage',
  SETNUM: 'setNum',
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.SETPOSTS:
      return {
        ...state,
        posts: [...new Set([...state.posts, ...action.payload.results])],
      }
    case ACTIONS.SETERROR:
      return {
        ...state,
        error: action.payload.error,
      }
    case ACTIONS.SETLOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }
    case ACTIONS.SETHASMORE:
      return {
        ...state,
        hasMore: action.payload.hasMore,
      }
    case ACTIONS.SET_POSTS_EMPTY:
      return {
        ...state,
        posts: [],
      }
    default:
      return state
  }
}

const usePostSearch = (num: Number, page: Number) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: false,
    posts: [],
    hasMore: false,
  })

  useEffect(() => {
    dispatch({ type: ACTIONS.SETLOADING, payload: { loading: true } })
    dispatch({ type: ACTIONS.SETERROR, payload: { error: false } })

    fetch(`http://localhost:8080/api/posts?page=${page}&num=${num}`)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        dispatch({ type: ACTIONS.SETPOSTS, payload: { results: res.results } })
        dispatch({
          type: ACTIONS.SETHASMORE,
          payload: { hasMore: res.hasNext },
        })
        dispatch({ type: ACTIONS.SETLOADING, payload: { loading: false } })
      })
      .catch(e => {
        dispatch({ type: ACTIONS.SETERROR, payload: { error: true } })
      })
  }, [num, page])

  const [loading, error, posts, hasMore] = [
    state.loading,
    state.error,
    state.posts,
    state.hasMore,
  ]
  return { loading, error, posts, hasMore, dispatch }
}

export default usePostSearch
