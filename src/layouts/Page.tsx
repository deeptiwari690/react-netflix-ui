import "./Page.css";

type PageProps = {
  children: React.ReactNode;
};

export function Page({ children }: PageProps) {
  return <div className="o-page">{children}</div>;
}
