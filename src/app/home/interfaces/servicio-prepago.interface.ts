export interface ServicioPrepago {
  ckgId: string;
  tipo: string;
  fechaActivacion: string;
  fechaCicloVida: string;
  estado: string;
  ofertaPrimaria: string;
  ciclo?: string;
  cicloProgramado?: string;
  saldo: number;
  tipoPromo: string;
}
