import LazyRoutes from "@router/LazyRoutes";

const regexCache = {};

export const getMatchingRoute = (path: string) => {
  for (const route of LazyRoutes) {
    let regex = regexCache[route.path];
    if (!regex) {
      regex = new RegExp(
        `^${route.path.replace(/:[^/]+/g, "([^/]+)").replace(/\*/g, ".*")}$`
      );
      regexCache[route.path] = regex;
    }
    if (regex.test(path)) {
      return route;
    }
  }
  return null;
};
