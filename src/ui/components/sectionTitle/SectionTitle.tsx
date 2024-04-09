type SectionTitleType = { message: string };

const SectionTitle = ({ message }: SectionTitleType) => {
  return (
    <h1 className="mx-auto text-2xl font-openSansBold pt-8 border-b-2 border-solid border-danger w-fit pb-2">
      {message}
    </h1>
  );
};

export default SectionTitle;
