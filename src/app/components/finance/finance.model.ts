export interface Finance {
  id?: number,
  produto: string;
  valor: number;
  data: Date;
  quantidade: number;
  status: boolean;
  user?:string;
  total?:string;
}
