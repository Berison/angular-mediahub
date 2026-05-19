export type MediaKeyStatus = 'new' | 'in_review' | 'approved' | 'rejected' | 'archived';
export type MediaFullStatuses = Partial<
  Record<
    MediaKeyStatus,
    {
      label: string;
      classes: string;
    }
  >
>;
