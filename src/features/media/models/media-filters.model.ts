export type MediaSorting =
  | {
      type: 'newest';
      query: 'newest';
    }
  | {
      type: 'oldest';
      query: 'oldest';
    }
  | {
      type: 'filename A-Z';
      query: 'a-z';
    }
  | {
      type: 'filename Z-A';
      query: 'z-a';
    }
  | {
      type: 'largest size';
      query: 'largest-size';
    };

export type MediaSortingQuery = 'newest' | 'oldest' | 'a-z' | 'z-a' | 'largest-size';
