import addZeroBeforeNumber from '../addZeroBeforeNumber';

const formatMessageDate = (timestamp: number): string => {
  try {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${addZeroBeforeNumber(day)}-${addZeroBeforeNumber(month)}-${addZeroBeforeNumber(year)} ${addZeroBeforeNumber(hour)}:${addZeroBeforeNumber(minute)}`;
  } catch (error: any) {
    console.error(error);

    return '';
  }
};

export default formatMessageDate;
