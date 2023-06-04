const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Vitor',
    email: 'vitor@email.com',
    phone: '19912345678',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();
