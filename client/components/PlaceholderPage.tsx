interface Props {
  title: string;
  subtitle?: string;
}

export default function PlaceholderPage({ title, subtitle }: Props) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-muted-foreground">
            {subtitle}
          </p>
        )}
        <p className="mt-6 text-sm text-muted-foreground">
          Continue in chat to generate this page's detailed content next.
        </p>
      </div>
    </div>
  );
}
