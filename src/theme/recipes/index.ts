import { RecipeConfig } from '@pandacss/dev';
import button from './Button.recipe';
import combobox from './Combobox.recipe';
import field from './Field.recipe';
import input from './Input.recipe';
import select from './Select.recipe';
import tabs from './Tabs.recipe';
import text from './Text.recipe';
import textarea from './Textarea.recipe';

const recipes: Record<string, RecipeConfig> = {
  button,
  combobox,
  field,
  input,
  select,
  tabs,
  text,
  textarea,
};

export default recipes;
