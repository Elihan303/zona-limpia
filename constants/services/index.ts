export enum CategoriesServices {
  water = "water",
  sanitation = "sanitation",
  reforms = "reforms",
}

export const CategoriesServicesLabels: Record<CategoriesServices, string> = {
  [CategoriesServices.water]: "Agua",
  [CategoriesServices.sanitation]: "Saneamiento",
  [CategoriesServices.reforms]: "Reforma",
};
