import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const ToastContext = createContext(() => {});
export const useToast = () => useContext(ToastContext);

/**
 * Load data from the API with loading/error state. `key` re-runs the request when it changes;
 * `reload()` runs it again. While a new key is loading, `data` from the previous key is not shown.
 */
export const useApi = (fn, key = '') => {
  const [tick, setTick] = useState(0);
  const reqKey = `${JSON.stringify(key)}#${tick}`;
  const [state, setState] = useState({ key: null, data: null, error: null });

  useEffect(() => {
    let alive = true;
    fn()
      .then((data) => alive && setState({ key: reqKey, data, error: null }))
      .catch((error) => alive && setState({ key: reqKey, data: null, error }));
    return () => { alive = false; };
  }, [reqKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const reload = useCallback(() => setTick((t) => t + 1), []);
  const setData = useCallback((data) => setState((s) => ({ ...s, data })), []);
  const loading = state.key !== reqKey;
  // Keep showing the current data during a reload of the same key; hide it when the key changes.
  const sameKey = state.key?.split('#')[0] === reqKey.split('#')[0];
  return { data: sameKey ? state.data : null, error: loading ? null : state.error, loading, reload, setData };
};
