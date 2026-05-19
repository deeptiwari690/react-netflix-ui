import "./PageBody.css";

type PageBodyProps = {
  children: React.ReactNode;
};

export function PageBody({ children }: PageBodyProps) {
  return <div className="o-page-body">{children}</div>;
}
