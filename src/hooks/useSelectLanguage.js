const useSelectLanguage = (setState) => {
  const handleSelectLanguage = (event) => {
    if (event.target.value === 'English') {
      setState('name-EUen');
    } else if (event.target.value === 'Japanese') {
      setState('name-JPja');
    }
  };
  return { handleSelectLanguage };
};

export default useSelectLanguage;
