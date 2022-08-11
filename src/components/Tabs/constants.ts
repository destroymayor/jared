export const directionType = {
  horizontal: {
    type: 'horizontal',
    container: 'flex flex-row items-start',
    width: (tab: any) => tab.width,
    transform: (tabBoundingBox: any, wrapperBoundingBox: any) =>
      `translateX(${tabBoundingBox?.left - wrapperBoundingBox?.left - 1}px)`,
  },
  vertical: {
    type: 'vertical',
    container: 'flex flex-col',
    width: () => '100%',
    transform: (tabBoundingBox: any, wrapperBoundingBox: any) =>
      `translateY(${tabBoundingBox?.top - wrapperBoundingBox?.top - 1}px)`,
  },
};
