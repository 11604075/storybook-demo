import Input from "./Input";
import { action } from "@storybook/addon-actions";

export default {
  title: 'Form/Input',
  component: Input,
  
}
export const NameInput = {
  args: {
    placeholder: "Enter Your Name",
    type:"text",
    onChange: action("Name input changed"), 

  },
};


export const AgeInput = {
  args: {
    placeholder: 'Enter Your Age',
    type:"number",
    onChange: action("Age input changed"), 
  },
};
