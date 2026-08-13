type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function BookButton({ className = "btn-primary", children = "Book Now" }: Props) {
  return (
    <button type="button" data-book-trigger className={className}>
      {children}
    </button>
  );
}
