import user from './user'
import team from './team'
import teams from './teams'
import sessions from './sessions'

// The reducer’s responsibility is to take the application state,
// account for changes coming from the action creators,
// and boil it all down (‘reduce’ it) to the new state.
// It is important to note that the reducer is a pure function,
// meaning it does not mutate the existing application state.
// Instead, it outputs a brand new application state for every change that is made.
export default {
  user,
  team,
  teams,
  sessions
}
