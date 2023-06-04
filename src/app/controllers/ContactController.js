class ContactController {
  index(request, response) {
    // Listar todos os registro
    response.send('Hello World!!!');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
