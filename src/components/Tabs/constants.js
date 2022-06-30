export const directionType = {
  horizontal: {
    container: 'flex flex-row items-start',
    width: (tab) => tab.width,
    transform: (tabBoundingBox, wrapperBoundingBox) =>
      `translateX(${tabBoundingBox?.left - wrapperBoundingBox?.left - 1}px)`,
  },
  vertical: {
    container: 'flex flex-col items-start',
    width: () => '100%',
    transform: (tabBoundingBox, wrapperBoundingBox) =>
      `translateY(${tabBoundingBox?.top - wrapperBoundingBox?.top - 1}px)`,
  },
};
