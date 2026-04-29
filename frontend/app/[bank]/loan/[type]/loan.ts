export type StepProps = {
  next: (data?: any) => void;
  back?: () => void;
  defaultValues?: any;
};