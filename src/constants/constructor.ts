export enum ConstructorElementTypes {
  BUN = 'bun',
  INGEDIENTS = 'ingredients',
}

export enum ConstructorBunTypes {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const ConstructorBunAdditionalText: { [K in ConstructorBunTypes]: string } = {
  [ConstructorBunTypes.TOP]: '(верх)',
  [ConstructorBunTypes.BOTTOM]: '(низ)',
};

export const ConstructorBunAdditionalStyle: { [K in ConstructorBunTypes]: string } = {
  [ConstructorBunTypes.TOP]: 'mb-4',
  [ConstructorBunTypes.BOTTOM]: 'mt-4',
};
