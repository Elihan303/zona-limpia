export const getPaths = (path: string) => {
  let isHomePage: boolean = false,
    isServicesPage: boolean = false,
    isContactPage: boolean = false;

  switch (path) {
    case "/":
      isHomePage = true;
      break;
    case "/servicios":
      isServicesPage = true;
      break;
    case "/contactos":
      isContactPage = true;
      break;
  }

  return {
    isHomePage,
    isServicesPage,
    isContactPage,
  };
};
