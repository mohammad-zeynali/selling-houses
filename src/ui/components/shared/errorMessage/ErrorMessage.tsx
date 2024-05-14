type SectionTitleType = { message: string };

const ErrorMessage = ({ message }: SectionTitleType) => {
  return (
    <span className="flex justify-center text-danger py-4">{message}</span>
  );
};

export default ErrorMessage;
