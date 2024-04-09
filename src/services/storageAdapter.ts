export const useLocalStorageMange = <T>() => {
  const setLocalStorage = (title: string, data: T) => {
    return localStorage.setItem(title, JSON.stringify(data));
  };

  const getLocalStorage = (title: string) => {
    return JSON.parse(localStorage.getItem(title)!);
  };

  return { setLocalStorage, getLocalStorage };
};

// export const useLocalStorageMange = <T extends LocalStorageItem>() => {
//   const setLocalStorage = (title: string, data: T) => {
//     return localStorage.setItem(title, JSON.stringify(data));
//   };

//   const getLocalStorage = (title: string): T | null => {
//     const item = localStorage.getItem(title);
//     return item ? JSON.parse(item) : null;
//   };

//   return { setLocalStorage, getLocalStorage };
// };
