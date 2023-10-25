import Accordion from '../components/Accordion'

function AccordionPage() {
   const items = [
    {
      id : "id1",
      label: "Can I use React on this Project?",
      content: "Yes I can use React as a matter of fact you can use any form of framework to make your dreams come true"
    },
    {
      id: "id2",
      label: "Can I use Javascript on this Project?",
      content: "Yes I can use Javascript as a matter of fact you can use any form of framework to make your dreams come true"
    },
    {
      id:"id3",
      label: "Can I use CSS on this Project?",
      content: "Yes I can use CSS as a matter of fact you can use any form of framework to make your dreams come true"
    }
   ]
  return (
    <Accordion items={items}></Accordion>
  );
}

export default AccordionPage;