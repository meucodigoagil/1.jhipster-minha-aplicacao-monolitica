import { TipoProduto } from 'app/entities/enumerations/tipo-produto.model';

export interface IProduto {
  id: number;
  nome?: string | null;
  tipo?: keyof typeof TipoProduto | null;
}

export type NewProduto = Omit<IProduto, 'id'> & { id: null };
