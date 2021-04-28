import selectionFilter from '../../utils/selection-filter';

test('selectionFilter with legit data', () => {
  const films = [
    {
      slug: 'the-social-network',
      description: 'Mark Zuckerberg creates a social networking site..',
      genre: 'drama',
      maturity: '12',
      title: 'The Social Network'
    }
  ];
  const series = [
    {
      title: 'Forrest Gump',
      description: 'Forrest Gump, a man with a low IQ..',
      slug: 'forrest-gump',
      maturity: '12',
      genre: 'feel-good'
    }
  ];

  const slides = selectionFilter({ series, films });
  expect(slides.films[0].title).toBe('Drama');
  expect(slides.films[0].data[0].description).toBe('Mark Zuckerberg creates a social networking site..');
  expect(slides.films[0].data[0].genre).toBe('drama');
  expect(slides.films[0].data[0].maturity).toBe('12');
  expect(slides.films[0].data[0].slug).toBe('the-social-network');

  expect(slides.series[4].title).toBe('Feel Good');
  expect(slides.series[4].data[0].description).toBe('Forrest Gump, a man with a low IQ..');
  expect(slides.series[4].data[0].genre).toBe('feel-good');
  expect(slides.series[4].data[0].maturity).toBe('12');
  expect(slides.series[4].data[0].slug).toBe('forrest-gump');
});

test('selectionFilter with no data', () => {
  const slides = selectionFilter();
  expect(slides.series[0].title).toBe('Documentaries');
  expect(slides.series[1].title).toBe('Comedies');
  expect(slides.series[2].title).toBe('Children');
  expect(slides.series[3].title).toBe('Crime');

  expect(slides.series[0].data).toBeUndefined();
});
