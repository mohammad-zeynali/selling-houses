type SortingTabType = {
  sortingType: string;
  setSortingType: React.Dispatch<React.SetStateAction<string>>;
};

const SortingTab = ({
  setSortingType,
  sortingType,
}: SortingTabType): JSX.Element => {
  return (
    <ul className="max-w-sm mx-auto grid gap-4 sm:grid-cols-2 mt-4">
      {["by price", "by area"].map((item) => (
        <li
          onClick={() => setSortingType(item)}
          className={`${
            item === sortingType ? "bg-danger text-white" : "bg-white"
          } text-center py-2 rounded-lg cursor-pointer font-openSansBold`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SortingTab;
