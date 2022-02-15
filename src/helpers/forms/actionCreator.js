export const formAtionsCreator = (type, action, payload = null) => ({
  type: `${type}_${action}`,
  payload,
});
