type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false, 
    dog: false, 
    cat: false, 
    fish: false
  };

  if ( activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
}


/**
 * Está função foi criada para auxiliar o efeito visual que define em qual pagina o usuario esta 
 * Ela recebe um active menu se o mesmo for diferente de string vazia ela seta true no mesmo que foi passado 
 * Dpois ela é utilizada na cntroller como uma auxiliar 
 */