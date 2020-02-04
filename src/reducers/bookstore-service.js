export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-ready microservices',
        author: 'Susan Fowler',
      },
      { id: 2, title: 'Release it!', author: 'Michael Nygard' },
    ];
  }
}
