const User = require('../models/User');

class UserController {

  /**
   * POST /users
   * @summary Cadastro de currículo.
   * @tags Currículo
   * @param {string} fullname.query.required - Nome completo
   * @param {string} district.query.required - Nome do bairro
   * @param {string} city.query.required - Nome da cidade
   * @param {string} postal_code.query.required - Numero do cep
   * @param {string} address.query.required - Nome da rua, numero e complemento
   * @param {string} celphone.query.required - Numero do telefone celular
   * @param {string} doc_ssn.query.required - Numero do cpf
   * @param {string} email.query.required - Endereço de email
   * @param {string} profession.query.required - Nome da profissão
   * @param {string} dob.query.required - Data de nascimento
   * @param {string} gender.query - Selecione o sexo
   * @param {string} doc_id.query - Numero do documento de id
   * @param {string} res_car.query - Possui veículo próprio
   * @param {string} drive_licence.query - Classe da habilitação
   * @param {string} phone_nr.query - Numero de telefone fixo
   * @param {string} marital_status.query - Estado civil

   */
  async store(req, res) {
    const userExists = await User.exists({ doc_ssn: req.body.doc_ssn })

    if(userExists) {
      return res.status(409).json({ msg: 'Usuário já existente!' });
    }
 
    const user = await User.create(req.body);
    return res.json(user);
  } 

}

module.exports = new UserController();
