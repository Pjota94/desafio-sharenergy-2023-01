import Clients from "../../models/Clients";

const clientsController = {
  create: async (req, res) => {
    try {
      const clients = {
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        cpf: req.body.cpf,
      };

      const response = await Clients.create(clients);
      res.status(201).json({ response, msg: "Cliente Criado com Sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const clients = await Clients.find();
      res.json(clients);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const client = await Clients.findById(id);

      if (!client) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      }
      res.json(client);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const client = await Clients.findById(id);

      if (!client) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      }

      const deleteClient = await Clients.findByIdAndDelete(id);
      res.status(200).json({ deleteClient, msg: "Cliente deletado!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const clients = {
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.telephone,
      address: req.body.address,
      cpf: req.body.cpf,
    };

    const updateClient = await Clients.findByIdAndUpdate(id, clients);

    if (!updateClient) {
      return res.status(404).json({ msg: "Cliente não encontrado!" });
    }

    res.status(200).json({ clients, msg: "Cliente Atualizado!" });
  },
};

export default clientsController;
