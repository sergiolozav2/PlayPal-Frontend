import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";

type LoadingWrapperProps = {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
};
export function LoadingWrapper(props: LoadingWrapperProps) {
  return (
    <div className={`${props.className} relative`}>
      {props.children}
      {props.isLoading && (
        <LoadingSpinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
    </div>
  );
}
