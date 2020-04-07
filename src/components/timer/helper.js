/**
 *
 * @param {number} time in seconds
 * @return {string} formated
 */
export const formatSeconds = (time) => {
  const minutes = Math.floor(time / 60);

  if (time >= 300) {
    return `${minutes}min.`;
  }
  const seconds = time % 60;

  if (minutes !== 0) {
    return `${minutes}min. ${seconds}segs.`;
  }

  return `${seconds}segs.`;
};
