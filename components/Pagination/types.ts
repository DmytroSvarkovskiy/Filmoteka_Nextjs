export type TPagination = {
  forcePage?: number;
  pageCount: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
  initialPage?: number;
};
