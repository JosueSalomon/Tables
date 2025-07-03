export interface TigoMoneyInfo {
  id: number;
  nombreRegistrado: string;
  fechaNacimiento: string;
  estado: number | string;
  fechaRegistroTm?: string;
  fechaBajaTm?: string;
  notificaciones?: string;
}
