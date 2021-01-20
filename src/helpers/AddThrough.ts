export const AddThrough = (setter: Function) => (subject: any) => {
  setter((current: any) => [...current, subject]);
};
