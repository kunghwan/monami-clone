interface Props {
  label: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  container: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  ref?: React.Ref<HTMLInputElement>;
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  id: string;
  value: string;
  title: string;
}

const Function = ({
  container,
  id,
  input,
  label,
  title,
  value,
  ref,
}: Props) => {
  return (
    <div>
      <label htmlFor={id} {...label}>
        {title}
      </label>
      <input
        {...input}
        ref={ref}
        type="text"
        value={value}
        id={id}
        onChange={(e) =>
          setRequirement((prev) => ({ ...prev, title: e.target.value }))
        }
      />
    </div>
  );
};

export default Function;
