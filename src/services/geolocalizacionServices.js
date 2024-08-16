const geolocalizacionServices = {
  getDistanceFromLatLonInKm: (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la tierra en km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distancia en km
    return d;
  },

  deg2rad: (deg) => deg * (Math.PI / 180),

  estaEnRango: (latEmpresa, lonEmpresa, latEmpleado, lonEmpleado, margenErrorMetros) => {
    const distanciaEnKm = getDistanceFromLatLonInKm(latEmpresa, lonEmpresa, latEmpleado, lonEmpleado);
    const distanciaEnMetros = distanciaEnKm * 1000; // Convertir la distancia de km a metros
    return distanciaEnMetros <= margenErrorMetros;
  },
};

module.exports = geolocalizacionServices;
