interface PokemonType {
    name: string;
    url: string;
    imageUrl: string;
    abilities: string[]
  }


  interface ToastMessage {
    title?: string,
    message: string
  }
  export {
   PokemonType,
   ToastMessage
  }