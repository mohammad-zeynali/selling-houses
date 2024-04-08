export const useLocalStorageMange = () => {
  const setLocalStorage = (title: string, data: unknown) => {
    return localStorage.setItem(title, JSON.stringify(data));
  };

  const getLocalStorage = (title: string) => {
    return JSON.parse(localStorage.getItem(title)!);
  };

  return { setLocalStorage, getLocalStorage };
};
