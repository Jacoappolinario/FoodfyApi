interface ICreateRecipeDTO {
  title: string;
  ingredients: string[];
  preparation: string[];
  information: string;
  chef_id: string;
  user_id: string;
}

export { ICreateRecipeDTO };
