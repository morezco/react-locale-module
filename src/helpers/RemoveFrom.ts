export const RemoveFrom = (setter: any) => (
  predicate: (subject: any) => boolean
) => setter((current: any) => current.filter(predicate(current)));
