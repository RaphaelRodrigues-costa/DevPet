import { Pet } from "../types/Pet";

const data: Pet[] = [
  {
      type: 'dog',
      image: 'pastor-alemao.jpg',
      name: 'Pastor-alemão',
      color: 'Amarelo e Preto',
      sex: 'Masculino'
  },
  {
      type: 'dog',
      image: 'labrador.jpg',
      name: 'Labrador-retriever',
      color: 'Branco',
      sex: 'Masculino'
  },
  {
      type: 'dog',
      image: 'zwergspitz.jpg',
      name: 'Zwergspitz',
      color: 'Amarelo',
      sex: 'Feminino'
  },
  {
      type: 'dog',
      image: 'husky.jpg',
      name: 'Husky Siberiano',
      color: 'Branco e Preto',
      sex: 'Masculino'
  },
  {
      type: 'dog',
      image: 'golden.jpg',
      name: 'Golden Retriever',
      color: 'Amarelo',
      sex: 'Masculino'
  },
  {
      type: 'dog',
      image: 'poodle.jpg',
      name: 'Poodle',
      color: 'Branco',
      sex: 'Feminino'
  },
  {
      type: 'dog',
      image: 'bulldog.jpg',
      name: 'Bulldog',
      color: 'Branco e Amarelo',
      sex: 'Masculino'
  },
  {
      type: 'cat',
      image: 'persa.jpg',
      name: 'Persa',
      color: 'Amarelo',
      sex: 'Masculino'
  },
  {
      type: 'cat',
      image: 'mainecoon.jpg',
      name: 'Maine Coon',
      color: 'Preto e Branco',
      sex: 'Masculino'
  },
  {
      type: 'cat',
      image: 'bengal.jpg',
      name: 'Bengal',
      color: 'Branco, Preto e Amarelo',
      sex: 'Feminino'
  },
  {
      type: 'cat',
      image: 'siames.jpg',
      name: 'Siamês',
      color: 'Amarelo e Preto',
      sex: 'Masculino'
  },
  {
      type: 'cat',
      image: 'sphynx.jpg',
      name: 'Sphynx',
      color: 'Branco',
      sex: 'Masculino'
  },
  {
      type: 'fish',
      image: 'neon.jpg',
      name: 'Tetra Neon',
      color: 'Vermelho e Azul',
      sex: 'Masculino'
  },
  {
      type: 'fish',
      image: 'matogrosso.jpg',
      name: 'Mato Grosso',
      color: 'Laranja',
      sex: 'Masculino'
  },
  {
      type: 'fish',
      image: 'limpavidro.jpg',
      name: 'Limpa Vidro',
      color: 'Verde e Branco',
      sex: 'Masculino'
  },
  {
      type: 'fish',
      image: 'tanictis.jpg',
      name: 'Tanictis',
      color: 'Vermelho',
      sex: 'Masculino'
  },
  {
      type: 'fish',
      image: 'acara.jpg',
      name: 'Acará Bandeira',
      color: 'Preto',
      sex: 'Masculino'
  },
];

export const Pets = {
  // pegar tosdos os pets 
  getAll: (): Pet[] => data,
  // filtrar por tipo 
  getFromType: (type: Pet['type']):Pet[] => data.filter(item => item.type === type),
  // filtrar por nome 
  getFromName: (name: Pet['name']):Pet[] => data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1),
}
// indexOf a fun,cão retorna -1 se não encontrar a existenci do item na matriz 
// const letras = ['a','b'];
// letras.indexOf('a') // 0 foi encontrado no index 0 
// letras.indexOf('c') // -1 não foi encontrado 
// letras.indexOf(search, index) // index = a busca inicia apartir daquele index e ele conta até achar na matriz 
// letras.indexOf('a', 1) // 1 

// indexOf() não diferencia maiusculo de minusculo, recomentado transforma as letras para resultados mais coerentes "toLowerCase()_"