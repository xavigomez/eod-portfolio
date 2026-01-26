import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface ProcessItem {
  title: string;
  content: string;
}

interface ProcessAccordionProps {
  process: ProcessItem[];
  projectSlug: string;
  className?: string;
}

export function ProcessAccordion({
  process,
  projectSlug,
  className,
}: ProcessAccordionProps) {
  return (
    <Accordion
      type="single"
      className={className}
      defaultValue={`${projectSlug}-1`}
    >
      {process.map((item, index) => {
        const order = index + 1;
        return (
          <AccordionItem key={order} value={`${projectSlug}-${order}`}>
            <AccordionTrigger className="cursor-pointer">
              <h3 className="text-2xl font-semibold">
                0{order}. {item.title}
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="text-base"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
