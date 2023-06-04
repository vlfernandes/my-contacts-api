const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar todos os registro
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Obter um registro
  show() {
  }

  // Criar novo registro
  store() {
  }

  // Editar um registro
  update() {
  }

  // Deletar um registro
  delete() {
  }
}

module.exports = new ContactController();
