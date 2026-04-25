type Props = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 bg-blue-500 text-white rounded mr-2"
    >
      {label}
    </button>
  );
}