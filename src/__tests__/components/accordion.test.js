import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs.json';
import { Accordion } from '../../components';

describe('<Accordion/>', () => {
  it('render the <Accordion/>', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body} </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Netflix?')).toBeTruthy();
    expect(getByText('How much does Netflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Netflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and close <Accordion/> component', () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body} </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    const accordionHeadText = 'What is Netflix?';
    const accordionBodyText =
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(accordionBodyText)).toBeFalsy();
    fireEvent.click(queryByText(accordionHeadText));
    expect(queryByText(accordionBodyText)).toBeTruthy();
    fireEvent.click(queryByText(accordionHeadText));
    expect(queryByText(accordionBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
