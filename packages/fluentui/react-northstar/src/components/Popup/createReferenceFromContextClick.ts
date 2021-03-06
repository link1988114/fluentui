import PopperJs from 'popper.js';

const createReferenceFromContextClick = (nativeEvent: MouseEvent): PopperJs.ReferenceObject => {
  const left = nativeEvent.clientX;
  const top = nativeEvent.clientY;
  const right = left + 1;
  const bottom = top + 1;

  function getBoundingClientRect(): ClientRect {
    return {
      left,
      top,
      right,
      bottom,

      height: 0,
      width: 0,
    };
  }

  return {
    getBoundingClientRect,
    clientWidth: 1,
    clientHeight: 1,
  };
};

export default createReferenceFromContextClick;
