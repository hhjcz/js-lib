/** Created by hhj on 1/19/16. */

/**
 * Inject dependencies and dispatch if function (like reduxUtils-thunk plus reduxUtils-inject together)
 * see createStore, client/defExport.jsx and server/render.jsx for usage
 *
 * @param deps
 * @returns {Function}
 */
// history is injected on client only (see createStore, client/defExport.jsx, server/render.jsx)
export default function myMiddleware(deps) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') return action({ dispatch, getState, ...deps })
    else if (action.type) return next(action)

    // hhj - allow for multiple (extra) dispatch - if no action.type is defined, means action was already dispatched, return result:
    return action
  }
}
