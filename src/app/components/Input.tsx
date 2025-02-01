type InputPropsType = {
  label: string;
  name: string;
  inputId?: string;
  placeholder?: string;
  inputType?: "text" | "password" | "email";
  autoC?: "off" | "on";
};

const Input = ({
  label,
  name,
  inputId,
  placeholder,
  inputType = "text",
  autoC = "off",
}: InputPropsType) => {
  return (
    <>
      <label className="px-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-xl px-2 py-1 outline-none border focus:border focus:border-purple-800"
        id={inputId}
        name={name}
        type={inputType}
        required
        autoComplete={autoC}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
