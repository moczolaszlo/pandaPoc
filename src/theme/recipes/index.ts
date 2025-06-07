import { RecipeConfig } from '@pandacss/dev';
import button from './Button.recipe';
import field from './Field.recipe';
import input from './Input.recipe';
import tabs from './Tabs.recipe';

const recipes: Record<string, RecipeConfig> = {
  button,
  field,
  input,
  tabs,
};

export default recipes;
