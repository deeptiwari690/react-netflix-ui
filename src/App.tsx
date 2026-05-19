import { Page } from "./layouts/Page";
import { Hero } from "./components/Hero";
import { PageBody } from "./layouts/PageBody";
import { Top10 } from "./components/Top10";
import { ValueProps } from "./components/ValueProps";
import { FaqAccordion } from "./components/FaqAccordion";

export function App() {
  return (
    <Page>
      <Hero />
      <PageBody>
        <Top10 />
        <ValueProps />
        <FaqAccordion />
      </PageBody>
    </Page>
  );
}
