import React from 'react';
import { render, fireEvent, queryByTestId } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        title: 'Amanda Knox',
        slug: 'amanda-knox',
        description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        id: '74b36338-9ae2-455b-b053-409526df9c1d',
        maturity: '12',
        genre: 'documentaries',
        docId: '96GP2cUaT92WYi6zCkKS'
      },
      {
        slug: 'man-on-wire',
        maturity: '12',
        title: 'Man on Wire',
        description:
          "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
        id: '772efecb-2be2-45c4-b7ef-fb54e2930519',
        genre: 'documentaries',
        docId: 'C7i9vQ3WMifs9pRmbZwE'
      },
      {
        title: 'Citizenfour',
        slug: 'citizenfour',
        description:
          'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
        id: 'aafd2333-3422-40ee-a291-fcef72bb6871',
        genre: 'documentaries',
        maturity: '12',
        docId: 'V1XICnKz3KmaHEkb7JgZ'
      },
      {
        description:
          "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
        slug: 'super-size-me',
        maturity: '12',
        genre: 'documentaries',
        id: '040f3270-271e-4415-ac5e-fab168fc1245',
        title: 'Super Size Me',
        docId: 'aXJNoXWQQp7HKdfDxVUu'
      },
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        id: 'ddbb2a90-185b-40a6-b8d6-80c454f8c08b',
        description:
          'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
        title: 'Tiger King',
        docId: 'ydEhHEEEfDagP9S0tCr7'
      }
    ]
  },
  {
    title: 'Comedies',
    data: [
      {
        maturity: '15',
        title: 'The Office',
        description:
          'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
        slug: 'the-office',
        genre: 'comedies',
        id: 'c242f4a1-c01f-4ed5-adfd-50a4a6483184',
        docId: '5fqkXAjcPeE4GoqUS6ED'
      },
      {
        maturity: '15',
        title: 'Family Guy',
        genre: 'comedies',
        slug: 'family-guy',
        description:
          'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
        id: '46569ef6-82ae-4399-85f2-108294412362',
        docId: 'bL3ByG2k9TLLQRlptEbe'
      },
      {
        genre: 'comedies',
        title: 'Curb Your Enthusiasm',
        slug: 'curb-your-enthusiasm',
        description:
          'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
        id: '04f9640b-bf07-4bb8-8602-26bc866fc81b',
        maturity: '15',
        docId: 'cv9RV1Iep2ujzmSRrG8I'
      },
      {
        genre: 'comedies',
        maturity: '15',
        id: 'e3925071-3e17-4eb6-9526-e63cc8ef0598',
        slug: 'arrested-development',
        description:
          'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
        title: 'Arrested Development',
        docId: 'lEi22TH1GymoMvLeuZch'
      },
      {
        description:
          'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
        title: 'South Park',
        genre: 'comedies',
        maturity: '15',
        slug: 'south-park',
        id: 'a3e11253-60c5-48a3-9b2f-85278fb85f3e',
        docId: 'mbtif6hGWzBpn80USVP6'
      }
    ]
  },
  {
    title: 'Children',
    data: [
      {
        maturity: '0',
        title: 'Peppa Pig',
        description:
          'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
        genre: 'children',
        slug: 'peppa-pig',
        id: '3702e5da-9700-456d-85dc-8e95665fe674',
        docId: 'LAAYPHVNDMiFU2kUumYv'
      },
      {
        slug: 'spongebob',
        maturity: '0',
        id: 'd22cb869-71b9-4e00-bd79-47fd85da1dd3',
        description:
          'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ',
        genre: 'children',
        title: 'SpongeBob',
        docId: 'k8aomCpY5YLHM7jl5PkN'
      },
      {
        description:
          'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
        maturity: '0',
        id: '6f41f30c-1609-47b2-8f72-f5438a76889a',
        genre: 'children',
        slug: 'paw-patrol',
        title: 'PAW Patrol',
        docId: 'mwebfBKzs4kvbh6gkzoU'
      },
      {
        description:
          'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
        genre: 'children',
        title: 'Dora The Explorer',
        slug: 'dora-the-explorer',
        maturity: '0',
        id: 'c967af47-fe62-4ffb-bb9a-97209ae57add',
        docId: 'pv1Uq5Qxsk2E83vO9FxS'
      },
      {
        maturity: '0',
        title: 'Arthur',
        slug: 'arthur',
        id: '40ccabe8-cb07-4ab5-8f50-6f4562c27bc0',
        description:
          'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
        genre: 'children',
        docId: 'tIhl7IzJTNsVMhksyJlx'
      }
    ]
  },
  {
    title: 'Crime',
    data: [
      {
        slug: 'the-staircase',
        genre: 'crime',
        title: 'The Staircase',
        description:
          "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
        id: 'f255d31d-37e9-49ca-a10a-ffce32235d4c',
        maturity: '18',
        docId: '4qYYS6dQWF5z0pwhYfnG'
      },
      {
        id: '0c8da2fc-bc59-4be7-bc46-0a0fbb10516c',
        slug: 'making-a-murderer',
        title: 'Making a Murderer',
        maturity: '18',
        genre: 'crime',
        description:
          'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
        docId: 'AXSyLlKu5B5dI1bZKoRi'
      },
      {
        title: 'The Confession Killer',
        genre: 'crime',
        slug: 'the-confession-killer',
        maturity: '18',
        id: '0771f3e0-f94b-405d-815c-19584a806f34',
        description:
          'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
        docId: 'EMcspwsktNIAPKQFZ0hi'
      },
      {
        id: '3a860606-f916-4750-a142-0fc55249efed',
        genre: 'crime',
        slug: 'long-shot',
        title: 'Long Shot',
        description:
          'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
        maturity: '18',
        docId: 'OlIX7j6meqSkXIjGMtyJ'
      },
      {
        title: 'The Innocent Man',
        id: '5d95035b-3013-45d1-b876-c3baedffecfc',
        genre: 'crime',
        description:
          'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.',
        maturity: '18',
        slug: 'the-innocent-man',
        docId: 'fgRWozH0HhUaQhOqTz69'
      }
    ]
  },
  {
    title: 'Feel Good',
    data: [
      {
        genre: 'feel-good',
        title: 'School of Rock',
        id: '2e7e8862-b90b-437f-9e8c-e1f7de1213f9',
        slug: 'school-of-rock',
        description:
          "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
        maturity: '12',
        docId: '1isWB6gEwfSXkMexZJKY'
      },
      {
        id: '7b8c06f4-1d6d-4b88-a715-ada89cba610f',
        title: 'Good Will Hunting',
        description:
          'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
        maturity: '12',
        slug: 'good-will-hunting',
        genre: 'feel-good',
        docId: 'CpVZ6cI6b4SnB31YlK3t'
      },
      {
        genre: 'feel-good',
        title: 'Midnight In Paris',
        description:
          'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
        slug: 'midnight-in-paris',
        maturity: '12',
        id: '414249b3-1910-4326-b751-f1383bf18586',
        docId: 'DHMdsXeJ9hNeehQAi7nz'
      },
      {
        slug: 'juno',
        maturity: '12',
        title: 'Juno',
        description:
          "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
        id: 'cd8a9d95-e38f-40e5-a750-c1b6394f81b8',
        genre: 'feel-good',
        docId: 'dOJGOg7gsyNIxXO0cczK'
      },
      {
        title: 'Forrest Gump',
        description:
          'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
        slug: 'forrest-gump',
        maturity: '12',
        genre: 'feel-good',
        id: '65731a23-2647-4458-830d-3ddfc9305b6b',
        docId: 'mBJsPXL2CCF2J8btMUvp'
      }
    ]
  }
];

describe('<Card/>', () => {
  it('renders the <Card/> component', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => {
          return (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}></Card.Image>
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src='/videos/bunny.mp4' />
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
    );

    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Tiger King')).toBeTruthy();
    expect(
      getByText('An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.')
    ).toBeTruthy();

    expect(getByText('Feel Good')).toBeTruthy();
    expect(getByText('Juno')).toBeTruthy();
    expect(
      getByText(
        "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected."
      )
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Card/> and toggles the card feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => {
          return (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item} data-testid={`${item.slug}-item-feature`}>
                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}></Card.Image>
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src='/videos/bunny.mp4' />
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
    );

    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('tiger-king-item-feature'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('peppa-pig-item-feature'));
    expect(queryByText('PG')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('PG')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
