export function soma(a, b){
  return a + b;
}

export function multiplica(a, b){
  return a * b;
}

export function elevaAoQuadrado(n){
  return multiplica(n, n);
}

var dois = 2;

export function metade(n){
  return n / dois;
}

export function ehPar(n){
  return n % dois === 0;
}

export function ehImpar(n){
  return !ehPar(n);
}
