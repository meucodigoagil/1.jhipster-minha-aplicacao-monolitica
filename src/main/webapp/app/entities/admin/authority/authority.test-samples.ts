import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b61668f9-12f5-4b0b-bde4-d6836a4f27b8',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e0850849-7c62-4850-a838-81927d7b159d',
};

export const sampleWithFullData: IAuthority = {
  name: '3e4b2398-5347-4b73-b248-1e170578dc75',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
