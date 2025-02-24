export type Motorcycles = {
  id: string;
  fechaCompra: string;
  precioCompra: number;
  modelo: string;
  nombre: string;
  coordenadas: {
    latitud: number;
    longitud: number;
  };
};
