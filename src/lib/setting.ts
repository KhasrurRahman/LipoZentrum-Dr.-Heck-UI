type RouteAccessMap = {
  [key: string]: string[];
};


export const routeAccessMap: RouteAccessMap = {
  '/admin(.*)': ['admin'],
  '/list(.*)': ['admin'],
  '/appointment(.*)': ['admin'],


  '/user(.*)': ['user'],
};
