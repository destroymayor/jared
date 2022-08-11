type directionParams = {
  type: string;
  container: string;
  width: (tab: DOMRect) => void;
  transform: (tabBoundingBox: DOMRect, wrapperBoundingBox: DOMRect) => void;
};
interface IDirectionType {
  horizontal: directionParams;
  vertical: directionParams;
  [key: string]: directionParams;
}

export const directionType: IDirectionType = {
  horizontal: {
    type: 'horizontal',
    container: 'flex flex-row items-start',
    width: (tab: DOMRect) => tab.width,
    transform: (tabBoundingBox, wrapperBoundingBox) =>
      `translateX(${tabBoundingBox?.left - wrapperBoundingBox?.left - 1}px)`,
  },
  vertical: {
    type: 'vertical',
    container: 'flex flex-col',
    width: () => '100%',
    transform: (tabBoundingBox, wrapperBoundingBox) =>
      `translateY(${tabBoundingBox?.top - wrapperBoundingBox?.top - 1}px)`,
  },
};
