import { SortOrder } from '../dtos/queryBlogSearch.dto';

export function handelQuerySort(sorted: SortOrder) {
  let sort: any = { title: 1 };
  if (sorted == SortOrder.CreatedAt) {
    sort = { createdAt: 1 };
  } else if (sorted == SortOrder.UpdatedAt) {
    sort = { updatedAt: 1 };
  }
  return sort;
}
