const addZeroBeforeNumber = (number: number): string => {
  try {
    return `${number < 10 && number > -1 ? '0' : ''}${number}`;
  } catch (error: any) {
    console.error(error);

    return '';
  }
};

export default addZeroBeforeNumber;
