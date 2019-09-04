const NAMESPACE_SEPARATOR = "/";

const defineAction = (
  type: string,
  subActions: any = [],
  namespace: string = ""
) => {
  if ((subActions && subActions.ACTION) || typeof subActions === "string") {
    namespace = subActions;
  }

  if (!Array.isArray(subActions)) {
    subActions = [];
  }

  const name = namespace ? [namespace, type].join(NAMESPACE_SEPARATOR) : type;

  const action = subActions.reduce(
    (r: any, i: any) =>
      Object.assign({}, r, {
        [i]: `${name}_${i}`
      }),
    {}
  );

  action.ACTION = name;
  action.defineAction = (type: string, subActions: any) =>
    defineAction(type, subActions, name);

  action.toString = () => name.toString();
  return action;
};

export default defineAction;
