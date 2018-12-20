import { Record } from 'immutable'

const MainModel = Record({
  id: 0,
  src: '',
  alt: '',
  name: '',
  width: 0
})

const setInitialState = initialState => (
  initialState.Main = new MainModel()
)

export { MainModel, setInitialState }
