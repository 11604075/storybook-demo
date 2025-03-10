import Input from "./Input";

export default {
  title: 'Form/Input',
  component: Input,
  
}
export const NameInput = {
  args: {
    placeholder: 'Enter Your Name',
    type:"text"
  },
};


export const AgeInput = {
  args: {
    placeholder: 'Enter Your Age',
    type:"number"
  },
};
