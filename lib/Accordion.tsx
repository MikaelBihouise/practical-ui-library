import React, { ReactNode, useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  content: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  classname: string;
  itemsClassname: string,
  itemsTitleClassname: string,
  itemsContentClassname: string,
}

export default function Accordion({
  items, classname, itemsClassname, itemsTitleClassname, itemsContentClassname,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordionItem = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const handleAccordionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter') {
      toggleAccordionItem(index);
    }
  };

  return (
    <div className={`${itemsClassname} ${classname || ''}`}>
      {items.map((item: AccordionItem) => (
        <div key={item.id} className={itemsClassname}>
          <div
            className={`${itemsTitleClassname} ${activeIndex === item.id ? 'active' : ''}`}
            onClick={() => toggleAccordionItem(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => handleAccordionKeyDown(event, item.id)}
          >
            {item.title}
          </div>
          <div
            className={`${itemsContentClassname} ${
              activeIndex === item.id ? 'active' : 'inactive'
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
