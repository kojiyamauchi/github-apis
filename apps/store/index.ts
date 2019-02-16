import { MutationTree, GetterTree, ActionTree } from 'vuex'

interface State {
  // Add Interfaces on State.
  isLandscape: boolean
  isResize: boolean
  stateDataBase: {}
}

export const state = (): State => ({
  // Add State.
  isLandscape: false,
  isResize: false,
  stateDataBase: {}
})

export const mutations: MutationTree<State> = {
  // Add Mutations.
  onLandscape(stateArg: State) {
    stateArg.isLandscape = true
  },
  offLandscape(stateArg: State) {
    stateArg.isLandscape = false
  },
  onResize(stateArg: State) {
    stateArg.isResize = true
  },
  offResize(stateArg: State) {
    stateArg.isResize = false
  },
  onDataBase(stateArg: State, payload: {}) {
    stateArg.stateDataBase = payload
  }
}

export const getters: GetterTree<State, State> = {
  // Add Getters.
}

export const actions: ActionTree<State, State> = {
  // Add Actions.
}
