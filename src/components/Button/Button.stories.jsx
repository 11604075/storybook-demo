import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: 'Form/Button',
  component: Button,

}
export const Submit = {
  args: {
    name: 'Submit',
    onClick: action("Submit button clicked"),

  },
};

export const Proceed = {
  args: {
    name: 'Proceed',
    onClick: action("Proceed button clicked"),

  },
};
