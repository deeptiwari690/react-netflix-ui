import { PageBody } from "./layouts/PageBody";
import { ValueProps } from "./components/ValueProps";
import { Page } from "./layouts/Page";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <Page>
      <Hero />
      <PageBody>
        <ValueProps />
      </PageBody>
    </Page>
  );
}
