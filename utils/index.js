export function buildStoreParam(namespace, value) {
  if (!namespace && !value) {
    throw new Error('namespace is required')
  }
  return `${namespace}/${value}`
}
