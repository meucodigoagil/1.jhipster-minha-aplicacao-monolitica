import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21178,
  login: '3j@y1\\V-OpNFB\\DR',
};

export const sampleWithPartialData: IUser = {
  id: 26239,
  login: 'I@K62Te\\@AC1lZ\\&zArtN\\6J6CK',
};

export const sampleWithFullData: IUser = {
  id: 8255,
  login: 'P?e@o\\=HV7Ng\\"PW8rj7\\47Ag9c',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
