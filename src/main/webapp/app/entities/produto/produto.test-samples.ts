import { IProduto, NewProduto } from './produto.model';

export const sampleWithRequiredData: IProduto = {
  id: 17359,
  nome: 'overvalue glum',
  tipo: 'FII',
};

export const sampleWithPartialData: IProduto = {
  id: 16808,
  nome: 'musculature absent swath',
  tipo: 'FUNDO',
};

export const sampleWithFullData: IProduto = {
  id: 3939,
  nome: 'supposing',
  tipo: 'PGBL',
};

export const sampleWithNewData: NewProduto = {
  nome: 'growing',
  tipo: 'PGBL',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
