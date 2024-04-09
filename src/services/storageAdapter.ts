export const useLocalStorageMange = <T>() => {
  const setLocalStorage = (title: string, data: T) => {
    return localStorage.setItem(title, JSON.stringify(data));
  };

  const getLocalStorage = (title: string) => {
    return JSON.parse(localStorage.getItem(title)!);
  };

  return { setLocalStorage, getLocalStorage };
};
